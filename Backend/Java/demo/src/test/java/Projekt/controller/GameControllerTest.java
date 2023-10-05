package Projekt.controller;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.converter.PlatformEntityToDtoConverter;
import Projekt.controller.converter.RatingEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.repository.GameRepository;
import Projekt.repository.RatingRepository;
import Projekt.service.AllGames;
import Projekt.service.GamesById;
import Projekt.service.GamesFilteredByStars;
import Projekt.service.GamesSorted;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GameControllerTest {

    private final GameRepository gameRepository = mock(GameRepository.class);
    private final PlatformEntityToDtoConverter platformConverter = new PlatformEntityToDtoConverter();
    private final GameEntityToDtoConverter gameConverter = new GameEntityToDtoConverter(platformConverter);
    private final AllGames allGames = mock(AllGames.class);
    private final RatingRepository ratingRepository = mock(RatingRepository.class);
    private final RatingEntityToDtoConverter ratingConverter = new RatingEntityToDtoConverter();
    private final GamesSorted gamesSorted = new GamesSorted(ratingRepository);
    private final GamesFilteredByStars gamesFilteredByStars = new GamesFilteredByStars(ratingRepository);
    private final GamesById gamesById = new GamesById(gameRepository, gameConverter, ratingRepository, ratingConverter);
    private final GameController gameController = new GameController(allGames, gamesById, gameRepository, gameConverter, gamesSorted, gamesFilteredByStars);
    @Test
    public void getAllGamesTest() {

        GameDto game1 = new GameDto();
        GameDto game2 = new GameDto();
        List<GameDto> expectedGames = List.of(game1, game2);

        when(allGames.getAllGames()).thenReturn(expectedGames);

        ResponseEntity<List<GameDto>> response = gameController.getAllGames(); // WAS IST HIER FALSCH???

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedGames, response.getBody());
    }
}