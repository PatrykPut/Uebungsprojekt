package Projekt.controller.converter;

import Projekt.controller.dto.GameDto;
import Projekt.repository.entities.GameEntity;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class GameEntityToDtoConverter {

    public GameDto convert(GameEntity gameEntity) {

        List<Long> ratingId = gameEntity.getRatingId() != null
                ? new ArrayList<>(gameEntity.getRatingId())
                : new ArrayList<>();

        List<Long> platformId = gameEntity.getPlatformId() != null
                ? new ArrayList<>(gameEntity.getPlatformId())
                : new ArrayList<>();

        return new GameDto(
                gameEntity.getId(),
                gameEntity.getName(),
                gameEntity.getReleaseDate(),
                gameEntity.getDeveloper(),
                gameEntity.getDescription(),
                gameEntity.getTrailer(),
                ratingId,
                platformId
        );
    }
}
