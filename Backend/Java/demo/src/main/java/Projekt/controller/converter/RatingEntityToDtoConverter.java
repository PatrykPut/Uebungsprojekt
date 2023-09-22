package Projekt.controller.converter;

import Projekt.controller.dto.RatingDto;
import Projekt.repository.entities.RatingEntity;
import org.springframework.stereotype.Service;

@Service
public class RatingEntityToDtoConverter {

    public RatingDto convertToRatingDto(RatingEntity ratingEntity) {
        Long gameId = null;

        if (ratingEntity.getGame() != null) {
            gameId = ratingEntity.getGame().getId();
        }
        return new RatingDto(
                ratingEntity.getId(),
                ratingEntity.getRating(),
                ratingEntity.getComment(),
                gameId
                );
    }
}
