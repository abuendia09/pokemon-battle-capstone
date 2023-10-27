package learn.pokemon.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Battle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int battleId;
    private int trainer1Id;
    private int trainer2Id;
    private int winnerId;

    public int getBattleId() {
        return battleId;
    }

    public void setBattleId(int battleId) {
        this.battleId = battleId;
    }

    public int getTrainer1Id() {
        return trainer1Id;
    }

    public void setTrainer1Id(int trainer1Id) {
        this.trainer1Id = trainer1Id;
    }

    public int getTrainer2Id() {
        return trainer2Id;
    }

    public void setTrainer2Id(int trainer2Id) {
        this.trainer2Id = trainer2Id;
    }

    public int getWinnerId() {
        return winnerId;
    }

    public void setWinnerId(int winnerId) {
        this.winnerId = winnerId;
    }
    // getters and setters
}