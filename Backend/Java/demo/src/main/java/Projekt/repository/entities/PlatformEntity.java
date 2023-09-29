package Projekt.repository.entities;

import jakarta.persistence.*;

@Entity(name = "platforms")
@Table(name =  "platforms")
public class PlatformEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "platformName")
    private String platformName;
    @Column(name = "game_id")
    private Long gameId;

    public PlatformEntity() {}
    public PlatformEntity(Long id, String platformName, Long gameId) {
        this.id = id;
        this.platformName = platformName;
        this.gameId = gameId;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
    public Long getGameId() { return gameId; }
}