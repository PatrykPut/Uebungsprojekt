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
    public void getGameWithRatingsTest() {
        GameEntity gameEntity = new GameEntity();
        GameDto gameDto = new GameDto();
        Long id = 1L;

        when(gameRepository.findByIdWithRatings(id)).thenReturn(Optional.of(gameEntity));
        when(converter.convert(gameEntity)).thenReturn(gameDto);

        Optional<GameDto> result = gamesById.getGameWithRatings(id);

        assertEquals(Optional.of(gameDto), result);
    }
    @Test
    public void getGameWithRatingsNonExistentTest() {
        Long nonExistentId = 2L;

        when(gameRepository.findByIdWithRatings(nonExistentId)).thenReturn(Optional.empty());

        Optional<GameDto> result = gamesById.getGameWithRatings(nonExistentId);

        assertEquals(Optional.empty(), result);
    }
}