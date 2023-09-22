package Projekt.domain;

public class Platform {

    private Long id;
    private String platformName;
    private Game game;

    public Platform(Long id, String platformName, Game game) {
        this.id = id;
        this.platformName = platformName;
        this.game = game;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
    public Game getGame() { return game; }
}
