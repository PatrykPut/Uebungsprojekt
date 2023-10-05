package Projekt.controller;
import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.controller.dto.GameWithRatingsDto;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.GameRepository;
import Projekt.service.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class GameController {

    private final AllGames allGames;
    private final GamesById gamesById;
    private final GameRepository gameRepository;
    private final GameEntityToDtoConverter converter;
    private final GamesSorted gamesSorted;
    private final GamesFilteredByStars gamesFilteredByStars;

    public GameController(AllGames allGames, GamesById gamesById, GameRepository gameRepository, GameEntityToDtoConverter converter, GamesSorted gamesSorted,
                          GamesFilteredByStars gamesFilteredByStars) {
        this.allGames = allGames;
        this.gamesById = gamesById;
        this.gameRepository = gameRepository;
        this.converter = converter;
        this.gamesSorted = gamesSorted;
        this.gamesFilteredByStars = gamesFilteredByStars;
    }
    @GetMapping("/games")
    public ResponseEntity<List<GameDto>> getAllGames() {
        List<GameDto> games = allGames.getAllGames();
        return ResponseEntity.ok(games);
    }

    @GetMapping("/game/{id}")
    public ResponseEntity<GameWithRatingsDto> getGamesById(@PathVariable Long id) {
        Optional<GameWithRatingsDto> gameWithRatingsDtoOpt = gamesById.getGameById(id);
        return gameWithRatingsDtoOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/games/sorted")
    public ResponseEntity<List<GameDto>>
        getSortedGames(@RequestParam String sortOption,
                       @RequestParam(required = false) String platform,
                       @RequestParam(required = false) Integer selectedStar,
                       @RequestParam(required = false) String searchTerm) {

        List<GameEntity> gameEntities = gameRepository.findAll( );

        gameEntities = gamesSorted.sortGames(gameEntities, sortOption);
        gameEntities = GamesFilteredByPlatform.filteredGames(gameEntities, platform);
        gameEntities = gamesFilteredByStars.starsGames(gameEntities, selectedStar);
        gameEntities = GamesFilteredBySearch.searchGame(gameEntities, searchTerm);

        List<GameDto> games = gameEntities.stream()
                .map(converter::convert)
                .collect(Collectors.toList());
        return ResponseEntity.ok(games);
    }
}