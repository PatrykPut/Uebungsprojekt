package Projekt.controller.converter;

import Projekt.controller.dto.GameDto;
import Projekt.repository.entities.GameEntity;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class GameEntityToDtoConverterTest {

    @Test
    public void converterTest() {
        GameEntity gameEntity = new GameEntity(1L, "Game1", "ReleaseDate", "Developer", "Description", "Trailer", null, "image");

        PlatformEntityToDtoConverter platformConverter = new PlatformEntityToDtoConverter();
        GameEntityToDtoConverter converter = new GameEntityToDtoConverter(platformConverter);

        GameDto gameDto = converter.convert(gameEntity);

        assertEquals(gameEntity.getId(), gameDto.getId());
        assertEquals(gameEntity.getName(), gameDto.getName());
        assertEquals(gameEntity.getReleaseDate(), gameDto.getReleaseDate());
        assertEquals(gameEntity.getDeveloper(), gameDto.getDeveloper());
        assertEquals(gameEntity.getDescription(), gameDto.getDescription());
        assertEquals(gameEntity.getTrailer(), gameDto.getTrailer());
    }
}