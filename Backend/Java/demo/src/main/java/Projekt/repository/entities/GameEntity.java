package Projekt.repository.entities;

import jakarta.persistence.*;
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
    private String image;
    @ManyToMany
    @JoinTable(
            name = "game_platforms",
            joinColumns = @JoinColumn(name = "game_id"),
            inverseJoinColumns = @JoinColumn(name = "platform_id"))
    private Set<PlatformEntity> platforms;
    public GameEntity(){}
    public GameEntity(Long id, String name, String releaseDate, String developer, String description, String trailer, Set<PlatformEntity> platforms, String image) {
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.description = description;
        this.trailer = trailer;
        this.platforms = platforms;
        this.image = image;
    }
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getReleaseDate() { return releaseDate; }
    public String getDeveloper() { return developer; }
    public String getDescription() { return description; }
    public String getTrailer() { return trailer; }
    public Set<PlatformEntity> getPlatforms() { return platforms ; }
    public String getImage() { return image; }
}