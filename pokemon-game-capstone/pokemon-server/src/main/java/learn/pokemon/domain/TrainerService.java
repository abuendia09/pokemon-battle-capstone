package learn.pokemon.domain;

import learn.pokemon.Exception.CustomAuthenticationException;
import learn.pokemon.data.TrainerRepository;
import learn.pokemon.models.Trainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

@Service
public class TrainerService {

    @Autowired
    private TrainerRepository trainerRepository;

    public Trainer registerTrainer(Trainer trainer) {
        validateUsernameAndEmail(trainer.getUsername(), trainer.getEmail());

        return trainerRepository.save(trainer);
    }

    public Trainer authenticate(String username, String password) {
        return trainerRepository.findByUsernameAndPassword(username, password)
                .orElseThrow(() -> new CustomAuthenticationException("Invalid username or password"));
    }

    private void validateUsernameAndEmail(String username, String email) {
        if (trainerRepository.findByUsername(username).isPresent()) {
            throw new DuplicateKeyException("Username already exists: " + username);
        }

        if (trainerRepository.findByEmail(email).isPresent()) {
            throw new DuplicateKeyException("Email already exists: " + email);
        }
    }
}