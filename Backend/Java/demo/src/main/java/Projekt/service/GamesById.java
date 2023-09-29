package Projekt.service;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.repository.GameRepository;
import Projekt.repository.entities.GameEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GamesById {
    private final GameRepository gameRepository;
    private final GameEntityToDtoConverter converter;

    public GamesById(GameRepository gameRepository, GameEntityToDtoConverter converter) {
        this.gameRepository = gameRepository;
        this.converter =  converter;
    }
    public Optional<GameDto> getGameWithRatings(Long id) {
        Optional<GameEntity> gameOpt = gameRepository.findById(id);
        return gameOpt.map(converter::convert);
    }
}
