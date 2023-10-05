package Projekt.controller.dto;

public class PlatformDto {

    private Long id;
    private String platformName;

    public PlatformDto() {}
    public PlatformDto(Long id, String platformName) {
        this.id = id;
        this.platformName = platformName;
    }
    public Long getId() { return id; }
    public String getPlatformName() { return platformName; }
}
