package Projekt.services;
import org.springframework.data.jpa.repository.JpaRepository;
import Projekt.domain.Game;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Long> {            //erweitert das generische CRUD Repository
    @Query("SELECT g FROM Game g LEFT JOIN FETCH g.ratings WHERE g.id = :id")
    Optional<Game> findByIdWithRatings(@Param("id") Long id);
}
