import React from 'react';

import '../css/Header.css';
import pokeBall from '../img/Pokeball-1.png';
import pokeTitle from '../img/pokemon-title-1.gif';
import pokeDex from '../img/poke-dex.png';
// import PropType from 'prop-types'

const Header = props =>
    <header>
        <img className='pokeBall-img' src={pokeBall} />
        <div className='poke-title'>
            <img className='pokeTitle-img' src={pokeTitle} />
            <img className='pokeDex-img' src={pokeDex} />
        </div>
        <img className='pokeBall-img second-ball' src={pokeBall} />
    </header>;

export default Header