package Projekt.controller.converter;

import Projekt.controller.dto.PlatformDto;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.PlatformEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(properties = "spring.profiles.active=test")
class PlatformEntityToDtoConverterTest {
    @Autowired
    private PlatformEntityToDtoConverter converter;
    @Test
    public void converterTest() {
        GameEntity gameEntity = new GameEntity(1L, "Game1", "ReleaseDate", "Developer", "Description", "Trailer", null, null);

        PlatformEntity platformEntity = new PlatformEntity(1L, "Platform1", 1L);

        PlatformDto platformDto = converter.convertToPlatformDto(platformEntity);

        assertEquals(platformEntity.getId(), platformDto.getId());
        assertEquals(platformEntity.getPlatformName(), platformDto.getPlatformName());

    }
}