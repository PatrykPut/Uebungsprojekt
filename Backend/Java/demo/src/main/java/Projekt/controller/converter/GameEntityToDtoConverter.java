package Projekt.controller.converter;

import Projekt.controller.dto.GameDto;
import Projekt.controller.dto.PlatformDto;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.PlatformEntity;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class GameEntityToDtoConverter {

    private final PlatformEntityToDtoConverter platformConverter;

    public GameEntityToDtoConverter(PlatformEntityToDtoConverter platformConverter) {
        this.platformConverter = platformConverter;
    }

    public GameDto convert(GameEntity gameEntity) {

        List<Long> ratingId = gameEntity.getRatingId() != null
                ? new ArrayList<>(gameEntity.getRatingId())
                : new ArrayList<>();

        List<PlatformDto> platforms = new ArrayList<>();
        if (gameEntity.getPlatforms() != null) {
            for (PlatformEntity platformEntity : gameEntity.getPlatforms()) {
                platforms.add(platformConverter.convertToPlatformDto(platformEntity));
            }
        }

        return new GameDto(
                gameEntity.getId(),
                gameEntity.getName(),
                gameEntity.getReleaseDate(),
                gameEntity.getDeveloper(),
                gameEntity.getDescription(),
                gameEntity.getTrailer(),
                ratingId,
                platforms
        );
    }
}
