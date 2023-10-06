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
    private final RatingEntityToDtoConverter converter = new RatingEntityToDtoConverter();
    @Test
    public void converterTest() {

        RatingEntity ratingEntity = new RatingEntity(1L, 3, "Comment", 1L);

        RatingDto ratingDto = converter.convertToRatingDto(ratingEntity);

        assertEquals(ratingEntity.getId(), ratingDto.getId());
        assertEquals(ratingEntity.getRating(), ratingDto.getRating());
        assertEquals(ratingEntity.getComment(), ratingDto.getComment());
    }
}