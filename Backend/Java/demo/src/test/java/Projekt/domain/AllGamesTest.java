package Projekt.domain;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.domain.businessLogic.AllGames;
import Projekt.repository.GameRepository;
import Projekt.repository.entities.GameEntity;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class AllGamesTest {
    private final GameRepository gameRepository = mock(GameRepository.class);
    private final GameEntityToDtoConverter converter = mock(GameEntityToDtoConverter.class);
    private final AllGames allGames = new AllGames(gameRepository, converter);
    @Test
    public void fetchAllGamesAndConvertToDtoTest() {
        GameEntity gameEntity = new GameEntity();
        GameDto expectedGameDto = new GameDto();

        when(gameRepository.findAll()).thenReturn(List.of(gameEntity));
        when(converter.convert(gameEntity)).thenReturn(expectedGameDto);

        List<GameDto> result = allGames.getAllGames();

        assertEquals(1, result.size());
        assertEquals(expectedGameDto, result.get(0));
    }
}