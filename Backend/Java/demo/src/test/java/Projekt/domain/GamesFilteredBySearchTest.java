package Projekt.domain;

import Projekt.domain.businessLogic.GamesFilteredBySearch;
import Projekt.repository.entities.GameEntity;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class GamesFilteredBySearchTest {
    private final GamesFilteredBySearch gamesFilteredBySearch = new GamesFilteredBySearch();
    private final GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, "image");
    private final GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, "image");
    @Test
    public void searchGameWhenSearchTermIsGivenTest() {

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredBySearch.searchGame(games, "Wit");

        assertEquals(1, result.size());
        assertEquals(game1, result.get(0));
    }
    @Test
    public void searchGameWhenNoSearchTermTest() {

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredBySearch.searchGame(games, "");

        assertEquals(2, result.size());
    }
    @Test
    public void searchGameWhenSearchTermNotFoundTest() {

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredBySearch.searchGame(games, "Assasin");

        assertEquals(0, result.size());
    }
}