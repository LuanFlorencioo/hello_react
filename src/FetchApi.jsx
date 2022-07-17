import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PokemonList = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    
    @media (max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) and (min-width: 501px) {
        grid-template-columns: repeat(3, 1fr);
    }

    img {
        width: 100%;
    }

`

export const FetchApi = () => {
    const [pokemons, setPokemons] = useState([]);
    const [listLoad, setListLoad] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(r => {
            setPokemons(r.data.results.map(p => p));
            setListLoad(true);
        })
    }, [])

    const showPokemon = ({ target }) => {
        const pokemon = target.innerText;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(r => {
            setCurrentPokemon(r.data)
            setListLoad(false)
        })
    }

    const returnToList = () => {
        setCurrentPokemon(null)
        setListLoad(true)
    }

    return (
        <>
            <h2><code>Fetch API</code></h2>
            <hr />
            <PokemonList>
                {listLoad ? pokemons?.map((pokemon, i) => <button onClick={showPokemon} key={i}>{pokemon.name}</button>) : null}
                {(currentPokemon) ? (
                    <div className="pokemonActive">
                        <h3>{currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1)}</h3>
                        <img src={currentPokemon.sprites.other.home.front_default} alt={currentPokemon.name} />
                        <p>↕ Altura: {currentPokemon.height / 10} m</p>
                        <p>🥌 Peso: {currentPokemon.weight / 10}Kg</p>
                        <p>🩸 HP: {currentPokemon.stats[0].base_stat}</p>
                        <p>🛡 Defesa: {currentPokemon.stats[2].base_stat}</p>
                        <p>🏹 Ataque: {currentPokemon.stats[1].base_stat}</p>
                        <button onClick={returnToList}>Voltar</button>
                    </div>
                ) : null}

            </PokemonList>
        </>
    )
}