package Projekt.service;

import Projekt.controller.dto.GameDto;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GameServiceTest {
    private final GameService gameService = mock(GameService.class);

    @Test
    public void getAllSortOptionsTest() {
        Map<String, String> params = new HashMap<>();
        params.put("sortOption", "name");
        params.put("platform", "PC");
        params.put("selectedStar", "5");
        params.put("searchTerm", "action");

        GameDto game1 = new GameDto();
        GameDto game2 = new GameDto();
        List<GameDto> expectedGames = List.of(game1, game2);

        when(gameService.getAllSortOptions(params)).thenReturn(new ResponseEntity<>(expectedGames, HttpStatus.OK));

        ResponseEntity<List<GameDto>> response = gameService.getAllSortOptions(params);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedGames, response.getBody());
    }
}