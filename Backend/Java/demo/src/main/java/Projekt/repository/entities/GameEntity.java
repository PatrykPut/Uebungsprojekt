package Projekt.repository.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "game")
public class GameEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String releaseDate;
    private String developer;
    @Column(length = 2000)
    private String description;
    private String trailer;
    private Set<Long> platformId;
    private Set<Long> ratingId;

    public GameEntity(){}
    public GameEntity(Long id, String name, String releaseDate, String developer, String description, String trailer, Set<Long> platformId, Set<Long> ratingId) {
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.description = description;
        this.trailer = trailer;
        this.platformId = platformId;
        this.ratingId = ratingId;
    }
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getReleaseDate() { return releaseDate; }
    public String getDeveloper() { return developer; }
    public String getDescription() { return description; }
    public String getTrailer() { return trailer; }
    public Set<Long> getPlatformId() { return platformId; }
    public Set<Long> getRatingId() { return ratingId; }
}