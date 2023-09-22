package Projekt.domain;

public class Rating {

    private Long id;
    private int rating;
    private String comment;
    private Game game;

    public Rating(Long id, int rating, String comment, Game game){
        this.id = id;
        this.rating = rating;
        this.comment = comment;
        this.game = game;
    }

    public Long getId() { return id; }
    public int getRating() { return rating; }
    public String getComment() { return comment; }
    public Game getGame() { return game; }
}


