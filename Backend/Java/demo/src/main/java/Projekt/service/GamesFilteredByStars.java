package Projekt.service;

import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class GamesFilteredByStars {

    public static List<GameEntity> starsGames(List<GameEntity> games, Integer selectedStar) {
        if (selectedStar != null && selectedStar > 0) {
            games = games.stream()
                    .filter(gameEntity -> {
                        double averageRating = gameEntity.getRatings().stream()
                                .mapToInt(RatingEntity::getRating)
                                .average().orElse(0);
                        return Math.round(averageRating) == selectedStar;
                    })
                    .collect(Collectors.toList());
        }
        return games;
    }
}
