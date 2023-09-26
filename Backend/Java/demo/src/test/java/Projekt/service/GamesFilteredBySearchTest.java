package Projekt.service;

import Projekt.repository.entities.GameEntity;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class GamesFilteredBySearchTest {

    @Test
    public void searchGameTest() {
        GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, null);
        GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, null);

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredBySearch.searchGame(games, "Wit");

        assertEquals(1, result.size());
        assertEquals(game1, result.get(0));
    }
    @Test
    public void searchGameWhenNoSearchTerm() {
        GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, null);
        GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, null);

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredBySearch.searchGame(games, "");

        assertEquals(2, result.size());
    }
    @Test
    public void searchGameWhenSearchTermNotFound() {
        GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, null);
        GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, null);

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredBySearch.searchGame(games, "Assasin");

        assertEquals(0, result.size());
    }
}