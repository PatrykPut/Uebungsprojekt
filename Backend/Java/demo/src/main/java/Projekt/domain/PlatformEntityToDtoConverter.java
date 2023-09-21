package Projekt.domain;

import Projekt.dto.PlatformDto;
import Projekt.entities.PlatformEntity;
import org.springframework.stereotype.Service;

@Service
public class PlatformEntityToDtoConverter {

    public PlatformDto convertToPlatformDto(PlatformEntity platformEntity) {

        PlatformDto platformDto = new PlatformDto();
        platformDto.setId(platformEntity.getId());
        platformDto.setPlatformName(platformEntity.getPlatformName());
        if (platformEntity.getGame() != null) {
            platformDto.setGameId(platformEntity.getGame().getId());
        }
        return platformDto;
    }
}


