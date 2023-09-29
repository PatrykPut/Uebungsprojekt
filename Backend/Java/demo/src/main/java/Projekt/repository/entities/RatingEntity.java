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
    @Column(name = "game_id")
    private Long gameId;

    public RatingEntity() {}
    public RatingEntity(Long id, int rating, String comment, Long gameId) {
        this.id = id;
        this.rating = rating;
        this.comment = comment;
        this.gameId = gameId;
    }
    public Long getId() { return id; }
    public String getComment() { return comment; }
    public int getRating() { return rating; }
    public Long getGameId() { return gameId; }
}