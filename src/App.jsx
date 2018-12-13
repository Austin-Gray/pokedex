import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Pokemon from './components/Pokemon';
import Detail from './components/Detail';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: [],
      selection: ''
    };
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        this.setState({ pokemon: response.data.results })
      })
      // .catch(() => alert('The Pokedex could not load Pokemon information, please check your internet connection.'))
  }

  selectPokemon(e) {
    this.setState({ selection: e.target.name })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={props => 
            <Pokemon {...props} pokemon={this.state.pokemon} selectPokemon={this.selectPokemon} />} />
          <Route path='/detail' render={props => 
            <Detail {...props} selection={this.state.selection} />} />
        </div>
      </Router>
    );
  }
}

export default App;
