package Projekt.repository.entities;

import jakarta.persistence.*;
import java.util.Set;

@Entity
@Table(name =  "platforms")
public class PlatformEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String platformName;
    @ManyToMany(mappedBy = "platforms")
    private Set<GameEntity> games;

    public PlatformEntity() {}
    public PlatformEntity(Long id, String platformName, Long gameId) {
        this.id = id;
        this.platformName = platformName;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
}