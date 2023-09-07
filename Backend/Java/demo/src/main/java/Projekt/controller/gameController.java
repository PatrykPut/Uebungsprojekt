package Projekt.controller;
import Projekt.domain.game;
import Projekt.domain.rating;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin                                                                //erlaubt die Anwendung der Anfragen von anderen Quellen
public class gameController {

    private final Projekt.services.gameRepository gameRepository;           //erstellt eine Instanzvariable (nur in der Klasse verfügbar)

    public gameController(Projekt.services.gameRepository gameRepository) { //erlaubt Zugriff auf das Repository
        this.gameRepository = gameRepository;
    }
    @GetMapping("/games")
    public ResponseEntity<List<game>> getAllGames() {
        List<game> games = (List<game>) gameRepository.findAll();
        return ResponseEntity.ok(games);
    }
    @GetMapping("/game/{id}")                                                           //Methode wird aufgerufen wenn der User eine GET-Anfrage sendet
    public ResponseEntity<game> getGameWithRatings(@PathVariable Long id) {             //die Methode nimmt die Id aus der URL und gibt eine ResponseEntity zurück
        Optional<game> gameOpt = gameRepository.findByIdWithRatings(id);                //spiel mit der Id wird aufgerufen und in Optional Objekt gespeichert
        if (gameOpt.isPresent()) {                                                      //überprüft ob ein Optional Objekt vorhanden ist
            return ResponseEntity.ok(gameOpt.get());                                    //Ergebnis wird angezeigt
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}