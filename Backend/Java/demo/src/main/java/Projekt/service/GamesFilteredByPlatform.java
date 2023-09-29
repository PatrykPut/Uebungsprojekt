package Projekt.service;

import Projekt.repository.entities.GameEntity;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class GamesFilteredByPlatform {

    public List<GameEntity> filteredGames(List<GameEntity> games, String platform) {
        if (platform != null && !platform.equals("All")) {
            games = games.stream()
                    .filter(gameEntity -> gameEntity.getPlatforms() != null && gameEntity.getPlatforms().stream()
                            .anyMatch(platformEntity -> platformEntity.getPlatformName().equals(platform)))
                    .collect(Collectors.toList());
        }
        return games;
    }
}
