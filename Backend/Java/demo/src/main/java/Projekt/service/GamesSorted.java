package Projekt.service;

import Projekt.repository.RatingRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.springframework.stereotype.Component;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class GamesSorted {
    private final RatingRepository ratingRepository;

    public GamesSorted(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }
    public List<GameEntity> sortGames(List<GameEntity> games, String sortOption) {

        List<RatingEntity> allRatings = ratingRepository.findAll();

        Map<Long, List<RatingEntity>> ratingsByGameId = allRatings.stream().collect(Collectors.groupingBy(RatingEntity::getGameId));

        switch (sortOption) {
            case "Newest":
                games.sort(Comparator.comparing(GameEntity::getReleaseDate).reversed());
                        break;

            case "Most Ratings":
                games.sort(Comparator.comparing((GameEntity gameEntity) ->
                        ratingsByGameId.getOrDefault(gameEntity.getId(), Collections.emptyList()).size()).reversed());
                        break;

            case "Best Ratings":
                games.sort(Comparator.comparing((GameEntity gameEntity) ->
                       ratingsByGameId.getOrDefault(gameEntity.getId(),
                               Collections.emptyList()).stream().mapToInt(RatingEntity::getRating).average().orElse(0)).reversed());
                        break;
        }
        return games;
    }
}