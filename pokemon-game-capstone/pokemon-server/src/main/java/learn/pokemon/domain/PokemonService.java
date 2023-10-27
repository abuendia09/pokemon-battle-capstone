package learn.pokemon.domain;

import learn.pokemon.Exception.CustomAuthenticationException;
import learn.pokemon.data.PokemonRepository;
import learn.pokemon.models.Pokemon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PokemonService {

    @Autowired
    private PokemonRepository pokemonRepository;

    public List<Pokemon> getAllPokemon() {
        return pokemonRepository.findAll();
    }

    public Pokemon getPokemonById(int pokemonId) {
        return pokemonRepository.findById(pokemonId)
                .orElseThrow(() -> new CustomAuthenticationException("Pokemon not found with id " + pokemonId));
    }

    public Pokemon createPokemon(Pokemon pokemon) {
        return pokemonRepository.save(pokemon);
    }

    public Pokemon updatePokemon(int pokemonId, Pokemon updatedPokemon) {
        Pokemon existingPokemon = getPokemonById(pokemonId);

        existingPokemon.setName(updatedPokemon.getName());
        existingPokemon.setType(updatedPokemon.getType());
        existingPokemon.setImage(updatedPokemon.getImage());
        existingPokemon.setHealth(updatedPokemon.getHealth());
        existingPokemon.setAttack(updatedPokemon.getAttack());
        existingPokemon.setDefense(updatedPokemon.getDefense());

        return pokemonRepository.save(existingPokemon);
    }

    public void deletePokemon(int pokemonId) {
        Pokemon existingPokemon = getPokemonById(pokemonId);
        pokemonRepository.delete(existingPokemon);
    }

}
