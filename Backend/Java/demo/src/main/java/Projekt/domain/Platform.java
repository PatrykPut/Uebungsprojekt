package Projekt.domain;

public class Platform {

    private Long id;
    private String platformName;

    public Platform(Long id, String platformName, Long gameId) {
        this.id = id;
        this.platformName = platformName;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
}
