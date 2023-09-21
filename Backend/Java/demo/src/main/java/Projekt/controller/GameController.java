package Projekt.controller;
import Projekt.domain.GameEntityToDtoConverter;
import Projekt.dto.GameDto;
import Projekt.entities.GameEntity;
import Projekt.entities.RatingEntity;
import Projekt.services.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class GameController {

    private final GameRepository gameRepository;
    private final GameEntityToDtoConverter converter;

    @Autowired
    public GameController(GameRepository gameRepository, GameEntityToDtoConverter converter) {
        this.gameRepository = gameRepository;
        this.converter = converter;
    }

    @GetMapping("/games")
    public ResponseEntity<List<GameDto>> getAllGames() {
        List<GameEntity> gameEntities = gameRepository.findAll();
        List<GameDto> games = gameEntities.stream()
                .map(converter::convert)
                .collect(Collectors.toList());
        return ResponseEntity.ok(games);
    }
    @GetMapping("/game/{id}")
    public ResponseEntity<GameDto> getGameWithRatings(@PathVariable Long id) {
        Optional<GameEntity> gameOpt = gameRepository.findByIdWithRatings(id);
        if (gameOpt.isPresent()) {
            GameDto gameDto = converter.convert(gameOpt.get());
            return ResponseEntity.ok(gameDto);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/games/sorted")
    public ResponseEntity<List<GameDto>>
        getSortedGames(@RequestParam String sortOption,
        @RequestParam(required = false) String platform,
        @RequestParam(required = false) Integer selectedStar,
        @RequestParam(required = false) String searchTerm) {
        List<GameEntity> gameEntities = gameRepository.findAll();
        switch (sortOption) {
            case "Newest":
                gameEntities.sort(Comparator.comparing(GameEntity::getReleaseDate).reversed());
                break;
            case "Most Ratings":
                gameEntities.sort(Comparator.comparing((GameEntity gameEntity) ->
                        gameEntity.getRatings().size()).reversed());
                break;
            case "Best Ratings":
                gameEntities.sort(Comparator.comparing((GameEntity gameEntity) ->
                        gameEntity.getRatings().stream().mapToInt(RatingEntity::getRating).average().orElse(0)).reversed());

        }
        if (platform != null && !platform.equals("All")) {
            gameEntities = gameEntities.stream()
                    .filter(gameEntity -> gameEntity.getPlatforms().stream()
                            .anyMatch(platformEntity -> platformEntity.getPlatformName().equals(platform)))
                    .collect(Collectors.toList());
        }
        if (selectedStar != null && selectedStar > 0) {
            gameEntities = gameEntities.stream()
                    .filter(gameEntity -> {
                        double averageRating = gameEntity.getRatings().stream()
                                .mapToInt(RatingEntity::getRating)
                                .average().orElse(0);
                        return Math.round(averageRating) == selectedStar;
                    })
                    .collect(Collectors.toList());
        }
        if (searchTerm != null) {
            gameEntities = gameEntities.stream()
                    .filter(gameEntity ->
                        gameEntity.getName().toLowerCase().contains(searchTerm.toLowerCase()))
                    .collect(Collectors.toList());
        }
        List<GameDto> games = gameEntities.stream()
                .map(converter::convert)
                .collect(Collectors.toList());
        return ResponseEntity.ok(games);
    }
}