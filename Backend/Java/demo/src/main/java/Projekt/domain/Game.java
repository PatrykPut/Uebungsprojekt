package Projekt.domain;

import java.util.Set;

public class Game {
    private Long id;
    private String name;
    private String releaseDate;
    private String developer;
    private String description;
    private String trailer;
    private Set<Platform> platforms;
    private Set<Rating> ratings;

    public Game(Long id, String name, String releaseDate, String developer, String description, String trailer, Set<Platform> platforms, Set<Rating> ratings) {
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.description = description;
        this.trailer = trailer;
        this.platforms = platforms;
        this.ratings = ratings;
    }
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getReleaseDate() { return releaseDate; }
    public String getDeveloper() { return developer; }
    public String getDescription() { return description; }
    public String getTrailer () { return  trailer; }
    public Set<Platform> getPlatforms() { return platforms; }
    public Set<Rating> getRatings () { return ratings; }
}