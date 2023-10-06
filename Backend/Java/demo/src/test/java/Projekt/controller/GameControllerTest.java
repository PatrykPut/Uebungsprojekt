package Projekt.controller;

import Projekt.controller.dto.GameDto;
import Projekt.controller.dto.GameWithRatingsDto;
import Projekt.controller.dto.RatingDto;
import Projekt.domain.businessLogic.*;
import Projekt.service.GameService;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.*;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GameControllerTest {
    @Test
    public void returnAllGamesTest() {
        AllGames allGames = mock(AllGames.class);
        GameController gameController = new GameController(allGames, null, null);

        GameDto game1 = new GameDto();
        GameDto game2 = new GameDto();

        List<GameDto> expectedDtos = List.of(game1, game2);

        when(allGames.getAllGames()).thenReturn(expectedDtos);

        ResponseEntity<List<GameDto>> response = gameController.returnAllGames();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(2, response.getBody().size());
    }
    @Test
    public void getGamesByIdTest() {
        GamesById gamesById = mock(GamesById.class);
        GameController gameController = new GameController(null, gamesById, null);

        GameDto game1 = new GameDto();
        List<RatingDto> ratings1 = new ArrayList<>();
        GameWithRatingsDto game = new GameWithRatingsDto(game1, ratings1);

        Long id = 1L;

        when(gamesById.getGameById(id)).thenReturn(Optional.of(game));

        ResponseEntity<GameWithRatingsDto> response = gameController.getGamesById(id);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(game, response.getBody());
    }
    @Test
    public void getSortedGamesTest() {
        GameService gameService = mock(GameService.class);
        GameController gameController = new GameController(null, null, gameService);

        Map<String, String> params = new HashMap<>();
        params.put("sort", "name");

        GameDto game1 = new GameDto();
        GameDto game2 = new GameDto();

        List<GameDto> expectedGames = List.of(game1, game2);

        when(gameService.getAllSortOptions(params)).thenReturn(new ResponseEntity<>(expectedGames, HttpStatus.OK));

        ResponseEntity<List<GameDto>> response = gameController.getSortedGames(params);

        assertEquals(HttpStatus.OK ,response.getStatusCode());
        assertEquals(expectedGames, response.getBody());
    }
}