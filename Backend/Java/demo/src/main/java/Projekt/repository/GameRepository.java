package Projekt.repository;
import Projekt.repository.entities.GameEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface GameRepository extends JpaRepository<GameEntity, Long> {            //erweitert das generische CRUD Repository
    @Query("SELECT g FROM GameEntity g LEFT JOIN FETCH g.ratings WHERE g.id = :id")
    Optional<GameEntity> findByIdWithRatings(@Param("id") Long id);
}
