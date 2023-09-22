package Projekt.controller.converter;

import Projekt.controller.dto.GameDto;
import Projekt.controller.dto.PlatformDto;
import Projekt.controller.dto.RatingDto;
import Projekt.repository.entities.GameEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameEntityToDtoConverter {
    private final RatingEntityToDtoConverter ratingConverter;
    private final PlatformEntityToDtoConverter platformConverter;

    @Autowired
    public GameEntityToDtoConverter(RatingEntityToDtoConverter ratingConverter, PlatformEntityToDtoConverter platformConverter) {
        this.ratingConverter = ratingConverter;
        this.platformConverter = platformConverter;
    }

    public GameDto convert(GameEntity gameEntity) {
        List<RatingDto> ratings = null;
        List<PlatformDto> platforms = null;

        if (gameEntity.getRatings() != null) {
            ratings = gameEntity.getRatings().stream()
                    .map(ratingConverter::convertToRatingDto)
                    .collect(Collectors.toList());
        }
        if (gameEntity.getPlatforms() != null) {
            platforms = gameEntity.getPlatforms().stream()
                    .map(platformConverter::convertToPlatformDto)
                    .collect(Collectors.toList());
        }

        return new GameDto(
                gameEntity.getId(),
                gameEntity.getName(),
                gameEntity.getReleaseDate(),
                gameEntity.getDeveloper(),
                gameEntity.getDescription(),
                gameEntity.getTrailer(),
                ratings,
                platforms
        );
    }
}
