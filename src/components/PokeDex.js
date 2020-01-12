import React from 'react';

import '../css/PokeDex.css';

const PokeDex = props =>
    <div className="PokeDex">{console.log(props.pokemon)}
        <h1>PokeDex</h1>
    </div>;

export default PokeDex