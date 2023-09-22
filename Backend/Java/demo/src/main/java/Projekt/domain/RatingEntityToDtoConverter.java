package Projekt.domain;

import Projekt.dto.RatingDto;
import Projekt.entities.RatingEntity;
import org.springframework.stereotype.Service;

@Service
public class RatingEntityToDtoConverter {

    public RatingDto convertToRatingDto(RatingEntity ratingEntity) {
        RatingDto ratingDto = new RatingDto();
        ratingDto.setId(ratingEntity.getId());
        ratingDto.setComment(ratingEntity.getComment());
        ratingDto.setRating(ratingEntity.getRating());
        if (ratingEntity.getGame() != null) {
            ratingDto.setGameId(ratingEntity.getGame().getId());
        }
        return ratingDto;
    }
}
