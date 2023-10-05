package Projekt.service;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.repository.GameRepository;
import Projekt.repository.entities.GameEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AllGames {
    private final GameRepository gameRepository;
    private final GameEntityToDtoConverter converter;

    public AllGames(GameRepository gameRepository, GameEntityToDtoConverter converter) {
        this.gameRepository = gameRepository;
        this.converter = converter;
    }
    public List<GameDto> getAllGames() {
        List<GameEntity> gameEntities = gameRepository.findAll();
        List<GameDto> games = gameEntities.stream()
                .map(converter::convert)
                .collect(Collectors.toList());
        return games;
    }
}