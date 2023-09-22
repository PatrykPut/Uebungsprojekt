package Projekt.repository.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;

@Entity
@Table(name = "rating")
public class RatingEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String comment;
    private int rating;
    @ManyToOne
    @JoinColumn(name="game_id", nullable= false)
    @JsonBackReference
    private GameEntity game;

    public RatingEntity() {}
    public RatingEntity(Long id, int rating, String comment, GameEntity game) {
        this.id = id;
        this.rating = rating;
        this.comment = comment;
        this.game = game;
    }
    public Long getId() { return id; }
    public String getComment() { return comment; }
    public int getRating() { return rating; }
    public GameEntity getGame() { return game; }
}
