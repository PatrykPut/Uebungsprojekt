package Projekt.service;

import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import java.util.List;
import java.util.Set;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class GamesFilteredByStarsTest {

    @Test
    public void filteredGamesByStarsTestWhenStarIsSelected() {
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

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredByStars.starsGames(games, 4);

        assertEquals(1, result.size());
        assertEquals(game2, result.get(0));
    }
    @Test
    public void filteredGamesByStarsWhenNoStarSelectedTest() {
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

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredByStars.starsGames(games, null);

        assertEquals(2, result.size());
    }
    @Test
    public void filteredGamesByStarsWhenSelectedStarLargerThanFive() {
        GameEntity game1 = Mockito.mock(GameEntity.class);
        GameEntity game2 = Mockito.mock(GameEntity.class);

        RatingEntity rating1 = Mockito.mock(RatingEntity.class);
        RatingEntity rating2 = Mockito.mock(RatingEntity.class);

        when(rating1.getRating()).thenReturn(5);
        when(rating2.getRating()).thenReturn(4);

        Set<RatingEntity> ratings1 = Set.of(rating1);
        Set<RatingEntity> ratings2 = Set.of(rating2);

        when(game1.getRatings()).thenReturn(ratings1);
        when(game2.getRatings()).thenReturn(ratings2);

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = GamesFilteredByStars.starsGames(games, 6);

        assertEquals(0, result.size());
    }
}