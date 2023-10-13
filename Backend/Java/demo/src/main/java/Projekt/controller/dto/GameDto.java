package Projekt.controller.dto;

import java.util.List;

public class GameDto {
    private Long id;
    private String name;
    private String releaseDate;
    private String developer;
    private String description;
    private String trailer;
    private List<PlatformDto> platforms;
    private String image;

    public GameDto() {}
    public GameDto(Long id, String name, String releaseDate, String developer, String description, String trailer, List<PlatformDto> platforms, String image) {
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
    public List<PlatformDto> getPlatforms() { return platforms; }
    public String getImage() { return image; }
}
