package Projekt.service;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.domain.businessLogic.GamesFilteredByPlatform;
import Projekt.domain.businessLogic.GamesFilteredBySearch;
import Projekt.domain.businessLogic.GamesFilteredByStars;
import Projekt.domain.businessLogic.GamesSorted;
import Projekt.repository.GameRepository;
import Projekt.repository.entities.GameEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class GameService {

    GameRepository gameRepository;
    GamesSorted gamesSorted;
    GamesFilteredByStars gamesFilteredByStars;
    GamesFilteredByPlatform gamesFilteredByPlatform;
    GamesFilteredBySearch gamesFilteredBySearch;
    GameEntityToDtoConverter converter;

    public GameService(GameRepository gameRepository, GamesSorted gamesSorted, GamesFilteredByStars gamesFilteredByStars,
                        GamesFilteredByPlatform gamesFilteredByPlatform, GamesFilteredBySearch gamesFilteredBySearch, GameEntityToDtoConverter converter) {

        this.gameRepository = gameRepository;
        this.gamesSorted = gamesSorted;
        this.gamesFilteredByStars = gamesFilteredByStars;
        this.gamesFilteredByPlatform = gamesFilteredByPlatform;
        this.gamesFilteredBySearch = gamesFilteredBySearch;
        this.converter = converter;
    }

    public ResponseEntity<List<GameDto>> getAllSortOptions(Map<String, String> allParams) {

        String sortOption = allParams.get("sortOption");
        String platform = allParams.get("platform");
        Integer selectedStar = allParams.containsKey("selectedStar") ? Integer.parseInt(allParams.get("selectedStar")) : null;
        String searchTerm = allParams.get("searchTerm");

        List<GameEntity> gameEntities = gameRepository.findAll();

        gameEntities = gamesSorted.sortGames(gameEntities, sortOption);
        gameEntities = gamesFilteredByPlatform.filteredGames(gameEntities, platform);
        gameEntities = gamesFilteredByStars.starsGames(gameEntities, selectedStar);
        gameEntities = gamesFilteredBySearch.searchGame(gameEntities, searchTerm);

        List<GameDto> games = gameEntities.stream().map(converter::convert).collect(Collectors.toList());

        return ResponseEntity.ok(games);
    }
}
