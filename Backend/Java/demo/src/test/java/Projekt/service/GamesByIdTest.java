package Projekt.service;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.repository.GameRepository;
import Projekt.repository.entities.GameEntity;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class GamesByIdTest {
    private final GameRepository gameRepository = Mockito.mock(GameRepository.class);
    private final GameEntityToDtoConverter converter = Mockito.mock(GameEntityToDtoConverter.class);
    private final GamesById gamesById = new GamesById(gameRepository, converter);

    @Test
    public void getGameWithRatingsAndConvertToDtoTest() {
        GameEntity gameEntity = new GameEntity(1L, "Witcher","2000-01-01", "Developer1", "Description1", "Trailer1",null, null);

        GameDto gameDto = new GameDto(gameEntity.getId(), gameEntity.getName(), gameEntity.getReleaseDate(), gameEntity.getDeveloper(), gameEntity.getDescription(), gameEntity.getTrailer(), null, null);

        when(gameRepository.findByIdWithRatings(gameEntity.getId())).thenReturn(Optional.of(gameEntity));
        when(converter.convert(gameEntity)).thenReturn(gameDto);

        Optional<GameDto> result = gamesById.getGameWithRatings(gameEntity.getId());

        assertEquals(Optional.of(gameDto), result);
    }
    @Test
    public void getGameWithRatingsWhenRatingIsNonExistentTest() {
        Long nonExistentId = 2L;

        when(gameRepository.findByIdWithRatings(nonExistentId)).thenReturn(Optional.empty());

        Optional<GameDto> result = gamesById.getGameWithRatings(nonExistentId);

        assertEquals(Optional.empty(), result);
    }
}