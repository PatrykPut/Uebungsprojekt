package Projekt.repository;

import Projekt.repository.entities.RatingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RatingRepository extends JpaRepository<RatingEntity, Long> {
    List<RatingEntity> findByGameId(Long gameId);
}
