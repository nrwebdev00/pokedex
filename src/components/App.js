import React, { Component } from 'react';

import '../css/App.css';
import Header from '../components/Header';
import PokeDex from '../components/PokeDex';

class App extends Component {

  // fetchPokemon = () =>
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  //   .then(respone => respone.json())
  //   .then(pokemon => this.setState({ pokemon })
  // );

  // componentDidMount(){
  //   this.fetchPokemon();
  // }

  
  state = {
    pokemon: [
      {id: 1, name: 'Bulbasaur', type: 'water', base_experience: 64},
      {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
      {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
      {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
      {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
      {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
      {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
      {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
      {id: 125, name: 'Electabuzz', type: 'eletric', base_experience: 172},
      {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
      {id: 160, name: 'feraligatr', type: 'normal', base_experience: 265},
      {id: 252, name: 'treecko', type: 'unkown', base_experience: 275}

    ]
  }; 


  render(){
    return (
      <div className="App">
        <Header />
        <PokeDex 
          pokemon={this.state.pokemon}
        />
      </div>
    );
  }
}

export default App;
