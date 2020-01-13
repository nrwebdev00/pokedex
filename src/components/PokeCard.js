import React, { Component} from 'react';

import '../css/PokeCard.css';
const pokemonImgAPI = 'https://pokeres.bastionbot.org/images/pokemon/';

let pokemonImgSRC = (id) => (pokemonImgAPI + id) 
class PokeCard extends Component{

    render(){
        let imgSrc = pokemonImgSRC(this.props.pokemonId) + '.png';
        return(
            <div className="pokecard">
                <h2>{this.props.pokemonName}</h2>
                <img src={imgSrc} alt={this.props.pokemonName}/>
                <h3>Type: {this.props.pokemonType}</h3>
                <h3>Exp: {this.props.pokemonBaseExp}</h3>
            </div>
        )
    }
}

export default PokeCard