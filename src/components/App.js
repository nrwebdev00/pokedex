import React, { Component } from 'react';

import '../css/App.css';
import Header from '../components/Header';
import PokeDex from '../components/PokeDex';

class App extends Component {

  state = {
    pokemon: null
  };

  fetchPokemon = () =>
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(respone => respone.json())
    .then(pokemon => this.setState({ pokemon })
  );

  componentDidMount(){
    this.fetchPokemon()
}  
  


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
