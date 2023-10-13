package Projekt.domain;

import Projekt.domain.businessLogic.GamesSorted;
import Projekt.repository.RatingRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GamesSortedTest {
    private final GameEntity game1 = new GameEntity(1L, "Witcher", "2000-01-01", "Developer1", "Description1", "Trailer1", null, "image");
    private final GameEntity game2 = new GameEntity(2L, "Minecraft", "2000-01-02", "Developer2", "Description2", "Trailer2", null, "image");
    private final GameEntity game3 = new GameEntity(3L, "Warzone", "2000-01-03", "Developer3", "Description3", "Trailer3", null, "image");
    private final RatingEntity rating1 = new RatingEntity(1L, 2, "", 1L);
    private final RatingEntity rating2 = new RatingEntity(2L, 3, "", 2L);
    private final RatingEntity rating3 = new RatingEntity(3L, 4, "", 2L);
    private final RatingRepository ratingRepository = mock(RatingRepository.class);
    private final GamesSorted gamesSorted = new GamesSorted(ratingRepository);

    @Test
    public void sortGamesWhenMostRatingsIsSelected() {

        List<GameEntity> games = new ArrayList<>(List.of(game1, game2, game3));
        List<RatingEntity> allRatings = List.of(rating1, rating2, rating3);

        when(ratingRepository.findAll()).thenReturn(allRatings);

        List<GameEntity> sortedGames = gamesSorted.sortGames(games, "Most Ratings");

        assertEquals(game3, sortedGames.get(2));
        assertEquals(game2, sortedGames.get(0));
        assertEquals(game1, sortedGames.get(1));
    }
    @Test
    public void sortGamesWhenNewestIsSelected() {

        List<GameEntity> games = new ArrayList<>(List.of(game1, game2, game3));

        gamesSorted.sortGames(games, "Newest");

        assertEquals(game3, games.get(0));
        assertEquals(game2, games.get(1));
        assertEquals(game1, games.get(2));
}
    @Test
    public void sortGamesWhenBestRatingsIsSelected() {

        List<GameEntity> games = new ArrayList<>(List.of(game1, game2, game3));
        List<RatingEntity> allRatings = new ArrayList<>(List.of(rating1, rating2, rating3));

        when(ratingRepository.findAll()).thenReturn(allRatings);

        gamesSorted.sortGames(games, "Best Ratings");

        assertEquals(game1, games.get(1));
        assertEquals(game2, games.get(0));
        assertEquals(game3, games.get(2));
    }
    @Test
    public void sortGamesWhenDefaultIsSelected() {

        List<GameEntity> games = List.of(game1, game2, game3);

        List<GameEntity> sortedGames = gamesSorted.sortGames(games, "Default");

        assertArrayEquals(games.toArray(), sortedGames.toArray());
    }
}