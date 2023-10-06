package Projekt.controller;

import Projekt.controller.dto.GameDto;
import Projekt.controller.dto.GameWithRatingsDto;
import Projekt.domain.businessLogic.AllGames;
import Projekt.domain.businessLogic.GamesById;
import Projekt.service.GameService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
public class GameController {

    private final AllGames allGames;
    private final GamesById gamesById;
    private final GameService gameService;

    public GameController(AllGames allGames, GamesById gamesById, GameService gameService) {
        this.allGames = allGames;
        this.gamesById = gamesById;
        this.gameService = gameService;
    }
    @GetMapping("/games")
    public ResponseEntity<List<GameDto>> returnAllGames() {
        List<GameDto> games = allGames.getAllGames();
        return ResponseEntity.ok(games);
    }

    @GetMapping("/game/{id}")
    public ResponseEntity<GameWithRatingsDto> getGamesById(@PathVariable Long id) {
        Optional<GameWithRatingsDto> gameWithRatingsDtoOpt = gamesById.getGameById(id);
        return gameWithRatingsDtoOpt.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/games/sorted")
    public ResponseEntity<List<GameDto>> getSortedGames(@RequestParam Map<String, String> allParams) {
        return gameService.getAllSortOptions(allParams);
    }
}