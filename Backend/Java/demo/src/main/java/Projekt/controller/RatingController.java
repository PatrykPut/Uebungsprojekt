package Projekt.controller;

import Projekt.repository.RatingRepository;
import Projekt.repository.entities.RatingEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RatingController {

    private final RatingRepository ratingRepository;

    public RatingController(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    @PostMapping("/rating")
    RatingEntity newRating(@RequestBody RatingEntity newRating) {
        return ratingRepository.save(newRating);
    }
}
