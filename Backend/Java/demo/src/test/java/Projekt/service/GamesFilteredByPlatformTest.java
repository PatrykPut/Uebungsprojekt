/*package Projekt.service;

import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.PlatformEntity;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class GamesFilteredByPlatformTest {

    @Test
    public void filteredGamesWhenPlatformIsSelectedTest() {
        Set<PlatformEntity> platforms1 = new HashSet<>();
        Set<PlatformEntity> platforms2 = new HashSet<>();

        GameEntity game1 = new GameEntity(1L, "Game1", "2000-01-01", "Developer1", "Description1", "Trailer1", platforms1, null);
        GameEntity game2 = new GameEntity(2L, "Game2", "2000-01-02", "Developer2", "Description2", "Trailer2", platforms2, null);

        PlatformEntity platform1 = new PlatformEntity(1L, "Platform1", game1);
        PlatformEntity platform2 = new PlatformEntity(2L, "Platform2", game2);

        platforms1.add(platform1);
        platforms2.add(platform2);

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredByPlatform.filteredGames(games, "Platform1");

        assertEquals(1, result.size());
        assertEquals(game1, result.get(0));
    }
    @Test
    public void filteredGamesWhenNoPlatformIsSelectedTest() {
        Set<PlatformEntity> platforms1 = new HashSet<>();
        Set<PlatformEntity> platforms2 = new HashSet<>();

        GameEntity game1 = new GameEntity(1L, "Game1", "2000-01-01", "Developer1", "Description1", "Trailer1", platforms1, null);
        GameEntity game2 = new GameEntity(2L, "Game2", "2000-01-02", "Developer2", "Description2", "Trailer2", platforms2, null);

        PlatformEntity platform1 = new PlatformEntity(1L, "Platform1", game1);
        PlatformEntity platform2 = new PlatformEntity(2L, "Platform2", game2);

        platforms1.add(platform1);
        platforms2.add(platform2);

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredByPlatform.filteredGames(games, null);

        assertEquals(2, result.size());
    }
}*/