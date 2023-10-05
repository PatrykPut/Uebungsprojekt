package Projekt.controller.converter;

import Projekt.controller.dto.PlatformDto;
import Projekt.repository.entities.PlatformEntity;
import org.springframework.stereotype.Service;

@Service
public class PlatformEntityToDtoConverter {

    public PlatformDto convertToPlatformDto(PlatformEntity platformEntity) {

        return new PlatformDto(
                platformEntity.getId(),
                platformEntity.getPlatformName()
        );
    }
}


