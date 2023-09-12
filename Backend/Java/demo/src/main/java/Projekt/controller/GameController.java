package Projekt.controller;
import Projekt.domain.Game;
import Projekt.services.GameRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin                                                                //erlaubt die Anwendung der Anfragen von anderen Quellen
public class GameController {

    private final GameRepository gameRepository;           //erstellt eine Instanzvariable (nur in der Klasse verfügbar)

    public GameController(GameRepository gameRepository) { //erlaubt Zugriff auf das Repository
        this.gameRepository = gameRepository;
    }
    @GetMapping("/games")
    public ResponseEntity<List<Game>> getAllGames() {
        List<Game> games = gameRepository.findAll();
        return ResponseEntity.ok(games);
    }
    @GetMapping("/game/{id}")
    public ResponseEntity<Game> getGameWithRatings(@PathVariable Long id) {
        Optional<Game> gameOpt = gameRepository.findByIdWithRatings(id);
        if (gameOpt.isPresent()) {
            return ResponseEntity.ok(gameOpt.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}