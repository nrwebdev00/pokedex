import React from 'react';
// import PropTypes from 'prop-types';

import '../css/PokeDex.css';
import PokeCard from '../components/PokeCard'

const PokeDex = props =>
    <div className="PokeDex">
        <h1>PokeDex</h1>
        <div className="card-display">
            { props.pokemon.map((pokemon, index) =>
                <PokeCard 
                    key={index}
                    pokemonId={pokemon.id}
                    pokemonName={pokemon.name}
                    pokemonType={pokemon.type}
                    pokemonBaseExp={pokemon.base_experience}

                />
            )}
        </div>
    </div>;

    PokeDex.propTypes = {
        
    }

export default PokeDex