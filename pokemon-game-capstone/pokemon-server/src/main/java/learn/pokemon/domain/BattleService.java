package learn.pokemon.domain;

import learn.pokemon.Exception.CustomAuthenticationException;
import learn.pokemon.data.BattleRepository;
import learn.pokemon.data.TrainerRepository;
import learn.pokemon.models.Battle;
import learn.pokemon.models.Trainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;

@Service
public class BattleService {

    @Autowired
    private BattleRepository battleRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    public void processBattleResult(Battle result) {
        // Fetch trainers
        Trainer trainer1 = trainerRepository.findById(result.getTrainer1Id())
                .orElseThrow(() -> new CustomAuthenticationException("Trainer not found with ID: " + result.getTrainer1Id()));

        Trainer trainer2 = trainerRepository.findById(result.getTrainer2Id())
                .orElseThrow(() -> new CustomAuthenticationException("Trainer not found with ID: " + result.getTrainer2Id()));

        //update trainer
        if (result.getWinnerId() != -1) {
            Trainer winner = trainerRepository.findById(result.getWinnerId())
                    .orElseThrow(() -> new CustomAuthenticationException("Winner not found with ID: " + result.getWinnerId()));

            winner.setWins(winner.getWins() + 1);
            trainerRepository.save(winner);

            Trainer loser = (trainer1.getTrainerId() == (winner.getTrainerId())) ? trainer2 : trainer1;
            loser.setLosses(loser.getLosses() + 1);
            trainerRepository.save(loser);
        }

        //save battle result
        battleRepository.save(result);
    }
}


