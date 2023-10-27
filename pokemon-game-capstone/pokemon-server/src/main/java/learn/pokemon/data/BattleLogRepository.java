package learn.pokemon.data;

import learn.pokemon.models.BattleLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BattleLogRepository extends JpaRepository<BattleLog, Integer> {
}
