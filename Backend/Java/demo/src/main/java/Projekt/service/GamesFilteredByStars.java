package Projekt.service;

import Projekt.repository.RatingRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class GamesFilteredByStars {
    private final RatingRepository ratingRepository;

    public GamesFilteredByStars(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    public List<GameEntity> starsGames(List<GameEntity> games, Integer selectedStar) {
        if (selectedStar != null && selectedStar > 0) {
            games = games.stream()
                    .filter(gameEntity -> {
                        List<RatingEntity> gameRatings = ratingRepository.findByGameId(gameEntity.getId());
                        double averageRating = gameRatings.stream()
                                .mapToInt(RatingEntity::getRating)
                                .average().orElse(0);
                        return Math.round(averageRating) == selectedStar;
                    })
                    .collect(Collectors.toList());
        }
        return games;
    }
}