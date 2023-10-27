package learn.pokemon.data;

import learn.pokemon.models.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TrainerRepository extends JpaRepository<Trainer, Integer> {
    Optional<Trainer> findByUsername(String username);

    Optional<Trainer> findByEmail(String email);

    Optional<Trainer> findByUsernameAndPassword(String username, String password);

}
