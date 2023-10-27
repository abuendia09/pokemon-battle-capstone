package learn.pokemon.data;

import learn.pokemon.models.Battle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BattleRepository extends JpaRepository<Battle, Integer> {
}
