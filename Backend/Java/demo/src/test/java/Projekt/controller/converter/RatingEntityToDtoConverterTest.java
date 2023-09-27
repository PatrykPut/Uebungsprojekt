package Projekt.controller.converter;

import Projekt.controller.dto.RatingDto;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(properties = "spring.profiles.active=test")
class RatingEntityToDtoConverterTest {

    @Autowired
    RatingEntityToDtoConverter converter;
    @Test
    public void converterTest() {
        GameEntity gameEntity = new GameEntity(1L, "Game1", "ReleaseDate", "Developer", "Description", "Trailer", null, null);

        RatingEntity ratingEntity = new RatingEntity(1L, 3, "Comment", gameEntity);

        RatingDto ratingDto = converter.convertToRatingDto(ratingEntity);

        assertEquals(ratingEntity.getId(), ratingDto.getId());
        assertEquals(ratingEntity.getRating(), ratingDto.getRating());
        assertEquals(ratingEntity.getComment(), ratingDto.getComment());
        assertEquals(ratingEntity.getGame().getId(), ratingDto.getGameId());
    }
}