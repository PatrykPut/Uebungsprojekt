package Projekt.repository.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity(name = "platforms")
@Table(name =  "platforms")
public class PlatformEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "platformName")
    private String platformName;
    @ManyToOne
    @JoinColumn(name = "game_id", nullable = false)
    @JsonBackReference
    private GameEntity game;

    public PlatformEntity() {}
    public PlatformEntity(Long id, String platformName, GameEntity game) {
        this.id = id;
        this.platformName = platformName;
        this.game = game;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
    public GameEntity getGame() { return game; }
}
