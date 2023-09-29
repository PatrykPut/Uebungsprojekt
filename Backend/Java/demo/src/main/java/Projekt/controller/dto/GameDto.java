package Projekt.controller.dto;

import java.util.List;

public class GameDto {
    private Long id;
    private String name;
    private String releaseDate;
    private String developer;
    private String description;
    private String trailer;
    private List<Long> ratingId;
    private List<Long> platformId;

    public GameDto() {}
    public GameDto(Long id, String name, String releaseDate, String developer, String description, String trailer, List<Long> ratingId, List<Long> platformId) {
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.developer = developer;
        this.description = description;
        this.trailer = trailer;
        this.ratingId = ratingId;
        this.platformId = platformId;
    }
    public Long getId() { return id; }
    public String getName() { return name; }
    public String getReleaseDate() { return releaseDate; }
    public String getDeveloper() { return developer; }
    public String getDescription() { return description; }
    public String getTrailer() { return trailer; }
    public List<Long> getRatingId() { return ratingId; }
    public List<Long> getPlatformId() { return platformId; }
}
