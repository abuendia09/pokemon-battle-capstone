package learn.pokemon.controllers;

import learn.pokemon.domain.BattleService;
import learn.pokemon.models.Battle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// BattleController.java
@RestController
@RequestMapping("/battle")
public class BattleController {

    @Autowired
    private BattleService battleService;

    @PostMapping("/result")
    public ResponseEntity<String> postBattleResult(@RequestBody Battle result) {
        battleService.processBattleResult(result);
        return ResponseEntity.ok("Battle result processed!");
    }
}
