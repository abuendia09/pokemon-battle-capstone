package learn.pokemon.controllers;

import learn.pokemon.Exception.CustomAuthenticationException;
import learn.pokemon.domain.TrainerService;
import learn.pokemon.models.Trainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/trainers")
public class TrainerController {

    @Autowired
    private TrainerService trainerService;

    @PostMapping("/register")
    public ResponseEntity<Trainer> registerTrainer(@RequestBody Trainer trainer) {
        Trainer registeredTrainer = trainerService.registerTrainer(trainer);
        return new ResponseEntity<>(registeredTrainer, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginTrainer(@RequestBody Trainer trainer) {
        try {
            Trainer authenticatedTrainer = trainerService.authenticate(trainer.getUsername(), trainer.getPassword());
            return new ResponseEntity<>(authenticatedTrainer, HttpStatus.OK);
        } catch (CustomAuthenticationException e) {
            return new ResponseEntity<>("Login failed: " + e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }


}