package Projekt.service;

import Projekt.repository.entities.GameEntity;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class GamesFilteredBySearch {

    public static List<GameEntity> searchGame(List<GameEntity> games, String searchTerm ) {
        if (searchTerm != null) {
            games = games.stream()
                    .filter(gameEntity ->
                            gameEntity.getName().toLowerCase().contains(searchTerm.toLowerCase()))
                    .collect(Collectors.toList());
        }
        return games;
    }
}
