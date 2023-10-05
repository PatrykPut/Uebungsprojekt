package Projekt.domain.businessLogic;

import Projekt.controller.converter.GameEntityToDtoConverter;
import Projekt.controller.converter.RatingEntityToDtoConverter;
import Projekt.controller.dto.GameDto;
import Projekt.controller.dto.GameWithRatingsDto;
import Projekt.controller.dto.RatingDto;
import Projekt.repository.GameRepository;
import Projekt.repository.RatingRepository;
import Projekt.repository.entities.GameEntity;
import Projekt.repository.entities.RatingEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GamesById {
    private final GameRepository gameRepository;
    private final GameEntityToDtoConverter gameConverter;
    private final RatingRepository ratingRepository;
    private final RatingEntityToDtoConverter ratingConverter;

    public GamesById(GameRepository gameRepository, GameEntityToDtoConverter gameConverter, RatingRepository ratingRepository, RatingEntityToDtoConverter ratingConverter) {
        this.gameRepository = gameRepository;
        this.gameConverter =  gameConverter;
        this.ratingRepository = ratingRepository;
        this.ratingConverter = ratingConverter;
    }
    public Optional<GameWithRatingsDto> getGameById(Long id) {
        Optional<GameEntity> gameOpt = gameRepository.findById(id);
        if (gameOpt.isPresent()) {
            GameDto gameDto = gameConverter.convert(gameOpt.get());
            List<RatingEntity> ratingEntities = ratingRepository.findByGameId(id);
            List<RatingDto> ratingDtos = ratingEntities.stream()
                    .map(ratingConverter::convertToRatingDto)
                    .collect(Collectors.toList());

            GameWithRatingsDto gameWithRatingsDto = new GameWithRatingsDto(gameDto, ratingDtos);

            return  Optional.of(gameWithRatingsDto);
        }
        return Optional.empty();
    }
}