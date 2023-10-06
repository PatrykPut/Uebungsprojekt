package Projekt.domain;

import Projekt.domain.businessLogic.GamesFilteredByStars;
import Projekt.repository.RatingRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GamesFilteredByStarsTest {
    private final RatingRepository ratingRepository = mock(RatingRepository.class);
    private final GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null);
    private final GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null);
    private final RatingEntity rating1 = new RatingEntity(1L, 3, "", null);
    private final RatingEntity rating2 = new RatingEntity(2L, 4, "", null);
    private final GamesFilteredByStars gamesFilteredByStars = new GamesFilteredByStars(ratingRepository);
    @Test
    public void filteredGamesByStarsTestWhenStarIsSelected() {

        when(ratingRepository.findByGameId(game1.getId())).thenReturn(List.of(rating1));
        when(ratingRepository.findByGameId(game2.getId())).thenReturn(List.of(rating2));

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredByStars.starsGames(games, 4);

        assertEquals(1, result.size());
        assertEquals(game2, result.get(0));
    }
    @Test
    public void filteredGamesByStarsWhenNoStarSelectedTest() {

        when(ratingRepository.findByGameId(game1.getId())).thenReturn(List.of(rating1));
        when(ratingRepository.findByGameId(game2.getId())).thenReturn(List.of(rating2));

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredByStars.starsGames(games, null);

        assertEquals(2, result.size());
    }
    @Test
    public void filteredGamesByStarsWhenSelectedStarLargerThanFive() {

        when(ratingRepository.findByGameId(game1.getId())).thenReturn(List.of(rating1));
        when(ratingRepository.findByGameId(game2.getId())).thenReturn(List.of(rating2));

        List<GameEntity> games = List.of(game1, game2);

        List<GameEntity> result = gamesFilteredByStars.starsGames(games, 6);

        assertEquals(0, result.size());
    }
}