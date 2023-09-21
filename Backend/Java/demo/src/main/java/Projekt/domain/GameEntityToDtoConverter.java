package Projekt.domain;

import Projekt.dto.GameDto;
import Projekt.entities.GameEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;

@Service
public class GameEntityToDtoConverter {

    @Autowired
    private RatingEntityToDtoConverter ratingConverter;
    @Autowired
    private PlatformEntityToDtoConverter platformConverter;

    public GameDto convert(GameEntity gameEntity) {
        GameDto gameDto = new GameDto();
    gameDto.setId(gameEntity.getId());
    gameDto.setName(gameEntity.getName());
    gameDto.setReleaseDate(gameEntity.getReleaseDate());
    gameDto.setDeveloper(gameEntity.getDeveloper());
    gameDto.setDescription(gameEntity.getDescription());
    gameDto.setTrailer(gameEntity.getTrailer());

        if (gameEntity.getRatings() != null) {
            gameDto.setRatings(gameEntity.getRatings().stream()
                    .map(ratingConverter::convertToRatingDto)
                    .collect(Collectors.toList()));
        }
        if (gameEntity.getPlatforms() != null) {
            gameDto.setPlatforms(gameEntity.getPlatforms().stream()
                    .map(platformConverter::convertToPlatformDto)
                    .collect(Collectors.toList()));
        }

        return gameDto;

    }
}
