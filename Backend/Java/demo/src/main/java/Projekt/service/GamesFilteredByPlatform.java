/*package Projekt.service;

import Projekt.repository.PlatformRepository;
import Projekt.repository.entities.GameEntity;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class GamesFilteredByPlatform {

    private final PlatformRepository platformRepository;

    public GamesFilteredByPlatform(PlatformRepository platformRepository) {
        this.platformRepository = platformRepository;
    }
    public List<GameEntity> filteredGames(List<GameEntity> games, String platform) {
        if (platform != null && !platform.equals("All")) {
            games = games.stream()
                    .filter(gameEntity -> gameEntity.getPlatformId() != null && gameEntity.getPlatformId().stream()
                            .flatMap(gameId -> platformRepository.findByGameId(gameId).stream())
                            .anyMatch(platformEntity -> platformEntity.getPlatformName().equals(platform)))
                    .collect(Collectors.toList());
        }
        return games;
    }
}*/
