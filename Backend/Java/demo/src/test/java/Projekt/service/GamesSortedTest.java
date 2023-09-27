package Projekt.service;

import Projekt.domain.Game;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class GamesSortedTest {
    GamesSorted gamesSorted = new GamesSorted();
    @Test
    public void sortGamesWhenNewestIsSelected() {
        GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, null);
        GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, null);

        List<GameEntity> games = new ArrayList<>();
        games.add(game1);
        games.add(game2);

        gamesSorted.sortGames(games, "Newest");

        assertEquals(game2, games.get(0));
        assertEquals(game1, games.get(1));
    }
    @Test
    public void sortGamesWhenMostRatingsIsSelected() {
        RatingEntity rating1 = new RatingEntity();
        RatingEntity rating2 = new RatingEntity();
        RatingEntity rating3 = new RatingEntity();

        Set<RatingEntity> ratings1 = Set.of(rating1, rating2);
        Set<RatingEntity> ratings2 = Set.of(rating3);

        GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, ratings1);
        GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, ratings2);

        List<GameEntity> games = new ArrayList<>();
        games.add(game1);
        games.add(game2);

        gamesSorted.sortGames(games, "Most Ratings");

        assertEquals(game2, games.get(1));
        assertEquals(game1, games.get(0));
    }
    @Test
    public void sortGamesWhenBestRatingsIsSelected() {
        GameEntity game1 = Mockito.mock(GameEntity.class);
        GameEntity game2 = Mockito.mock(GameEntity.class);

        RatingEntity rating1 = Mockito.mock(RatingEntity.class);
        RatingEntity rating2 = Mockito.mock(RatingEntity.class);

        when(rating1.getRating()).thenReturn(3);
        when(rating2.getRating()).thenReturn(4);

        Set<RatingEntity> ratings1 = Set.of(rating1);
        Set<RatingEntity> ratings2 = Set.of(rating2);

        when(game1.getRatings()).thenReturn(ratings1);
        when(game2.getRatings()).thenReturn(ratings2);

        List<GameEntity> games = new ArrayList<>(List.of(game1, game2));

        gamesSorted.sortGames(games, "Best Ratings");

        assertEquals(game1, games.get(1));
        assertEquals(game2, games.get(0));
    }
    @Test
    public void sortGamesWhenDefaultIsSelected() {

        GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, null);
        GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, null);
        GameEntity game3 = new GameEntity(2L, "Warzone", "2000-01-03", "Developer3", "Description3", "Trailer3", null, null);

        List<GameEntity> games = new ArrayList<>();
        games.add(game1);
        games.add(game2);
        games.add(game3);

        gamesSorted.sortGames(games, "Default");

        assertEquals(game1, games.get(0));
        assertEquals(game2, games.get(1));
        assertEquals(game3, games.get(2));
    }
}