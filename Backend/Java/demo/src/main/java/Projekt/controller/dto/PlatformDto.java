package Projekt.controller.dto;

public class PlatformDto {

    private Long id;
    private String platformName;

    private Long gameId;

    public PlatformDto() {}
    public PlatformDto(Long id, String platformName, Long gameId) {
        this.id = id;
        this.platformName = platformName;
        this.gameId = gameId;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
    public Long getGameId() { return gameId; }
}
