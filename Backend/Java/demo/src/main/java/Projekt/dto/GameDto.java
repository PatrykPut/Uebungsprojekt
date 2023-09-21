package Projekt.dto;

import java.util.List;

public class GameDto {
    private Long id;
    private String name;
    private String releaseDate;
    private String developer;
    private String description;
    private String trailer;
    private List<RatingDto> ratings;
    private List<PlatformDto> platforms;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDeveloper() {
        return developer;
    }

    public void setDeveloper(String developer) {
        this.developer = developer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public List<RatingDto> getRatings() {
        return ratings;
    }

    public void setRatings(List<RatingDto> ratings) {
        this.ratings = ratings;
    }

    public List<PlatformDto> getPlatforms() {
        return platforms;
    }

    public void setPlatforms(List<PlatformDto> platforms) {
        this.platforms = platforms;
    }
}
