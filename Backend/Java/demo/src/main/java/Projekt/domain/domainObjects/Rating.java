package Projekt.domain.domainObjects;

public class Rating {

    private Long id;
    private int rating;
    private String comment;
    private Long gameId;

    public Rating(Long id, int rating, String comment, Long gameId){
        this.id = id;
        this.rating = rating;
        this.comment = comment;
        this.gameId = gameId;
    }

    public Long getId() { return id; }
    public int getRating() { return rating; }
    public String getComment() { return comment; }
    public Long getGameId() { return gameId; }
}


