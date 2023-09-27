package Projekt.controller;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.repository.GameRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.service.AllGames;
import Projekt.service.GamesById;
import Projekt.service.GamesSorted;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.Matchers.hasSize;
import Projekt.controller.dto.GameDto;
import java.util.*;
import static org.mockito.BDDMockito.given;

@SpringBootTest(properties = "spring.profiles.active=test")
@AutoConfigureMockMvc
public class GameControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AllGames allGames;
    @Test
    public void getAllGamesCheckIfOkTest() throws Exception {
        GameDto game1 = new GameDto(1L, "Game1","2000-01-01", "Developer1", "Description1", "Trailer1",null, null);
        GameDto game2 = new GameDto(2L, "Game2", "2000-01-02", "Developer2", "Description2", "Trailer2", null, null);
        List<GameDto> allGamesList = List.of(game1, game2);

        given(allGames.getAllGames()).willReturn(allGamesList);

        mockMvc.perform(get("/games"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }
    @MockBean
    private GamesById gamesById;
    @Test
    public void getGameByIdCheckIfOkTest() throws Exception {
        GameDto game1 = new GameDto(1L, "Game1","2000-01-01", "Developer1", "Description1", "Trailer1",null, null);
        Optional<GameDto> gameDtoOpt = Optional.of(game1);
        given(gamesById.getGameWithRatings(1L)).willReturn(gameDtoOpt);

        mockMvc.perform(get("/game/1"))
                .andExpect(status().isOk());
    }
    @MockBean
    GameRepository gameRepository;
    @MockBean
    GameEntityToDtoConverter converter;
    @MockBean
    GamesSorted gamesSorted;
    @Autowired
    GameController controller;
    @Test
    void getSortedGamesWithSortOptionTest() {
        String sortOption1 = "option1";
        String sortOption2 = "option2";
        String platform = null;
        Integer selectedStar = null;
        String searchTerm = null;

        GameEntity game1 = new GameEntity();
        GameEntity game2 = new GameEntity();
        List<GameEntity> gameEntities = Arrays.asList(game1, game2);

        GameDto gameDto1 = new GameDto();
        GameDto gameDto2 = new GameDto();
        List<GameDto> gameDtos = Arrays.asList(gameDto1, gameDto2);

        when(gameRepository.findAll()).thenReturn(gameEntities);
        when(converter.convert(game1)).thenReturn(gameDto1);
        when(converter.convert(game2)).thenReturn(gameDto2);

        ResponseEntity<List<GameDto>> result1 = controller.getSortedGames(sortOption1, platform, selectedStar, searchTerm);
        assertEquals(gameDtos, result1.getBody());

        ResponseEntity<List<GameDto>> result2 = controller.getSortedGames(sortOption2, platform, selectedStar, searchTerm);
        assertEquals(gameDtos, result2.getBody());

        verify(gamesSorted).sortGames(gameEntities, sortOption1);
        verify(gamesSorted).sortGames(gameEntities, sortOption2);
    }
}