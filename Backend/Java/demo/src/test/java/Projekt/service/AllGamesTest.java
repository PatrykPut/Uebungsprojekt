package Projekt.service;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.repository.GameRepository;
import Projekt.repository.entities.GameEntity;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class AllGamesTest {
    private final GameRepository gameRepository = Mockito.mock(GameRepository.class);
    private final GameEntityToDtoConverter converter = Mockito.mock(GameEntityToDtoConverter.class);
    private final AllGames allGames = new AllGames(gameRepository, converter);

    @Test
    public void getAllGamesTest() {
        GameEntity gameEntity = new GameEntity();
        GameDto gameDto = new GameDto();

        when(gameRepository.findAll()).thenReturn(List.of(gameEntity));
        when(converter.convert(gameEntity)).thenReturn(gameDto);

        List<GameDto> result = allGames.getAllGames();

        assertEquals(1, result.size());
        assertEquals(gameDto, result.get(0));
    }
}