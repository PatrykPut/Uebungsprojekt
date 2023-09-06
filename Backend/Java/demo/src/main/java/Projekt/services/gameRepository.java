package Projekt.services;
import org.springframework.data.repository.CrudRepository;
import Projekt.domain.game;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface gameRepository extends CrudRepository<game, Long> {
    @Query("SELECT g FROM game g LEFT JOIN FETCH g.ratings WHERE g.id = :id")
    Optional<game> findByIdWithRatings(@Param("id") Long id);
}
