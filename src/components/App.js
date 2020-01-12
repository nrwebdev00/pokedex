import React, { Component } from 'react';

import '../css/App.css';
import Header from '../components/Header';
import PokeDex from '../components/PokeDex';

class App extends Component {

  state = {
    data: null
  };

  fetchPokemon = () =>
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(respone => respone.json())
    .then(data => this.setState({ data })
  );

  componentDidMount(){
    this.fetchPokemon()
}  
  


  render(){
    return (
      <div className="App">
        <Header />
        <PokeDex />
      </div>
    );
  }
}

export default App;
