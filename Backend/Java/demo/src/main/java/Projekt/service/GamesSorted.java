package Projekt.service;

import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.springframework.stereotype.Service;
import java.util.Comparator;
import java.util.List;

@Service
public class GamesSorted {
    public static void sortGames(List<GameEntity> games, String sortOption) {
        switch (sortOption) {
            case "Newest":
                games.sort(Comparator.comparing(GameEntity::getReleaseDate).reversed());
                break;
            case "Most Ratings":
                games.sort(Comparator.comparing((GameEntity gameEntity) ->
                        gameEntity.getRatings().size()).reversed());
                        break;
            case "Best Ratings":
                games.sort(Comparator.comparing((GameEntity gameEntity) ->
                        gameEntity.getRatings().stream().mapToInt(RatingEntity::getRating).average().orElse(0)).reversed());
        }
    }
}
