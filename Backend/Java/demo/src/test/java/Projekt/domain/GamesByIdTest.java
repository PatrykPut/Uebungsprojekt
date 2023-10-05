package Projekt.domain;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.converter.PlatformEntityToDtoConverter;
import Projekt.controller.converter.RatingEntityToDtoConverter;
import Projekt.controller.dto.GameWithRatingsDto;
import Projekt.domain.businessLogic.GamesById;
import Projekt.repository.GameRepository;
import Projekt.repository.RatingRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.junit.jupiter.api.Test;
import java.util.Collections;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GamesByIdTest {
    private final PlatformEntityToDtoConverter platformConverter = new PlatformEntityToDtoConverter();
    private final GameRepository gameRepository = mock(GameRepository.class);
    private final GameEntityToDtoConverter gameConverter = new GameEntityToDtoConverter(platformConverter);
    private final RatingRepository ratingRepository = mock(RatingRepository.class);
    private final RatingEntityToDtoConverter ratingConverter = new RatingEntityToDtoConverter();
    private final GamesById gamesById = new GamesById(gameRepository, gameConverter, ratingRepository, ratingConverter);

    @Test
    public void getGameByIdWhenGameExists() {
        GameRepository gameRepository = mock(GameRepository.class);
        RatingRepository ratingRepository = mock(RatingRepository.class);
        GameEntityToDtoConverter gameConverter = new GameEntityToDtoConverter(platformConverter);
        RatingEntityToDtoConverter ratingConverter = new RatingEntityToDtoConverter();

        GamesById service = new GamesById(gameRepository, gameConverter, ratingRepository, ratingConverter);

        GameEntity mockGameEntity = new GameEntity();
        RatingEntity mockRatingEntity = new RatingEntity();

        when(gameRepository.findById(anyLong())).thenReturn(Optional.of(mockGameEntity));
        when(ratingRepository.findByGameId(anyLong())).thenReturn(Collections.singletonList(mockRatingEntity));

        Optional<GameWithRatingsDto> result = service.getGameById(1L);

        assertTrue(result.isPresent());
    }
    @Test
    public void getGameByIdWhenGameIsNonExistentTest() {
        Long nonExistentId = 2L;

        when(gameRepository.findById(nonExistentId)).thenReturn(Optional.empty());

        Optional<GameWithRatingsDto> result = gamesById.getGameById(nonExistentId);

        assertEquals(Optional.empty(), result);
    }
}