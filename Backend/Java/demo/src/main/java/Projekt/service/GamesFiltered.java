package Projekt.service;

import Projekt.repository.entities.GameEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GamesFiltered {
    public static List<GameEntity> filteredGames(List<GameEntity> games, String platform) {
        if (platform != null && !platform.equals("All")) {
            games = games.stream()
                    .filter(gameEntity -> gameEntity.getPlatforms().stream()
                            .anyMatch(platformEntity -> platformEntity.getPlatformName().equals(platform)))
                    .collect(Collectors.toList());
        }
        return games;
    }
}
