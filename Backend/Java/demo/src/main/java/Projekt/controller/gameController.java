package Projekt.controller;
import Projekt.domain.game;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
public class gameController {

    private final Projekt.services.gameRepository gameRepository;

    public gameController(Projekt.services.gameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }
    @PostMapping("/games")
    public void createGames() {
        game game1 = new game();
        game1.setId(11111L);
        game1.setName("The Witcher 3: Wild Hunt");
        game1.setReleaseDate("19.05.2015");
        game1.setDeveloper("CD Projekt");

        game game2 = new game();
        game2.setId(22222L);
        game2.setName("Minecraft");
        game2.setReleaseDate("18.11.2011");
        game2.setDeveloper("Mojang Studios");

        game game3 = new game();
        game3.setId(33333L);
        game3.setName("Red Dead Redemption 2");
        game3.setReleaseDate("26.10.2018");
        game3.setDeveloper("Rockstar Games");

        game game4 = new game();
        game4.setId(44444L);
        game4.setName("The Legend of Zelda: Breath of the Wild");
        game4.setReleaseDate("03.03.2017");
        game4.setDeveloper("Nintendo");

        game game5 = new game();
        game5.setId(55555L);
        game5.setName("Fortnite");
        game5.setReleaseDate("25.07.2017");
        game5.setDeveloper("Epic Games");

        gameRepository.save(game1);
        gameRepository.save(game2);
        gameRepository.save(game3);
        gameRepository.save(game4);
        gameRepository.save(game5);
    }
    @GetMapping("/game/{id}")
    public ResponseEntity<game> getGameWithRatings(@PathVariable Long id) {
        Optional<game> gameOpt = gameRepository.findByIdWithRatings(id);
        if (gameOpt.isPresent()) {
            return ResponseEntity.ok(gameOpt.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}