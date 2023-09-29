package Projekt.repository;

import Projekt.repository.entities.PlatformEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PlatformRepository extends JpaRepository<PlatformEntity, Long> {
    List<PlatformEntity> findByGameId(Long gameId);
}
