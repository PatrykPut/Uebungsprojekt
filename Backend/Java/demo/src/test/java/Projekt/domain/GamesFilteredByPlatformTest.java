package Projekt.domain;

import Projekt.domain.businessLogic.GamesFilteredByPlatform;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.PlatformEntity;
import org.junit.jupiter.api.Test;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class GamesFilteredByPlatformTest {
    private final GamesFilteredByPlatform gamesFilteredByPlatform = new GamesFilteredByPlatform();
    private final PlatformEntity platform1 = new PlatformEntity(1L, "Platform1", 1L);
    private final PlatformEntity platform2 = new PlatformEntity(2L, "Platform2", 2L);
    private final GameEntity game1 = new GameEntity(1L, "Game1", "2000-01-01", "Developer1", "Description1", "Trailer1", Set.of(platform1));
    private final GameEntity game2 = new GameEntity(2L, "Game2", "2000-01-02", "Developer2", "Description2", "Trailer2", Set.of(platform2));

    @Test
    public void filteredGamesWhenPlatformIsSelectedTest() {

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredByPlatform.filteredGames(games, "Platform1");

        assertEquals(1, result.size());
        assertEquals(game1, result.get(0));
    }
    @Test
    public void filteredGamesWhenNoPlatformIsSelectedTest() {

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredByPlatform.filteredGames(games, null);

        assertEquals(2, result.size());
    }
}