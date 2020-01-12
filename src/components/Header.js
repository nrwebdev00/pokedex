import React from 'react';

import '../css/Header.css';
import pokeBall from '../img/Pokeball-1.png';
import pokeTitle from '../img/pokemon-title-1.gif';
import pokeDex from '../img/poke-dex.png';
// import PropType from 'prop-types'

const Header = props =>
    <header>
        <img className='pokeBall-img' alt='pokeball' src={pokeBall} />
        <div className='poke-title'>
            <img className='pokeTitle-img' alt='poketitle' src={pokeTitle} />
            <img className='pokeDex-img' alt='pokedex' src={pokeDex} />
        </div>
        <img className='pokeBall-img second-ball' alt='pokeball' src={pokeBall} />
    </header>;

export default Header