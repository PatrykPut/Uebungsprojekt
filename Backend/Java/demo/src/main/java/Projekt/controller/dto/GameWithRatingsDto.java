package Projekt.controller.dto;

import java.util.List;

public class GameWithRatingsDto {
    private final GameDto game;
    private final List<RatingDto> ratings;

    public GameWithRatingsDto(GameDto game, List<RatingDto> ratings) {
        this.game = game;
        this.ratings = ratings;
    }

    public GameDto getGame() { return game; }
    public List<RatingDto> getRatings() { return ratings; }
}
