package Projekt.controller;
import Projekt.domain.GameEntityToDtoConverter;
import Projekt.dto.GameDto;
import Projekt.entities.GameEntity;
import Projekt.services.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
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
}