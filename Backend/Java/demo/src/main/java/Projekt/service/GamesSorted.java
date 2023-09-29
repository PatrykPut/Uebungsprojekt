package Projekt.service;

import Projekt.repository.RatingRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.springframework.stereotype.Component;
import java.util.Comparator;
import java.util.List;
@Component
public class GamesSorted {
    private final RatingRepository ratingRepository;

    public GamesSorted(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }
    public List<GameEntity> sortGames(List<GameEntity> games, String sortOption) {
        switch (sortOption) {
            case "Newest":
                games.sort(Comparator.comparing(GameEntity::getReleaseDate).reversed());
                        break;

            case "Most Ratings":
                games.sort(Comparator.comparing((GameEntity gameEntity) ->
                        ratingRepository.findByGameId(gameEntity.getId()).size()).reversed());
                        break;

            case "Best Ratings":
                games.sort(Comparator.comparing((GameEntity gameEntity) ->
                       ratingRepository.findByGameId(gameEntity.getId()).stream().mapToInt(RatingEntity::getRating).average().orElse(0)).reversed());
                        break;
        }
        return games;
    }
}