package Projekt.domain;

public class Platform {

    private Long id;
    private String platformName;
    private Long gameId;

    public Platform(Long id, String platformName, Long gameId) {
        this.id = id;
        this.platformName = platformName;
        this.gameId = gameId;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
    public Long getGameId() { return gameId; }
}
