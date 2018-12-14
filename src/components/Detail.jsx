import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      sprite: '',
      description: '',
      height: '',
      weight: '',
      types: ''
    };
  }

  componentDidMount() {
    if (this.props.selection) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.selection}/`)
        .then(response => {
          let types = this.props.capitalize(response.data.types[0].type.name);
          if (response.data.types[1]) {
            types += ' / ' + this.props.capitalize(response.data.types[1].type.name);
          }
          this.setState({
            name: response.data.name,
            number: response.data.id,
            sprite: response.data.sprites.front_default,
            height: response.data.height / 10,
            weight: response.data.weight / 10,
            types
          })
        })
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.props.selection}/`)
      .then(response => {
        this.setState({
          description: response.data.flavor_text_entries[1].flavor_text,
        })
      })
    }
  }

  render() {
    if (!this.props.selection) return <Redirect push to='/' />
    return (
      <div className='container text-dark'>
        <div className='row'>
          <div className='col-12 heading jumbotron bg-white text-center pb-1'>
            <h1>{this.props.capitalize(this.state.name)}</h1>
          </div>
        </div>
        <div className='row'>
          <div className='sprite col text-center align-content-center card bg-light pb-3'>
            <img src={this.state.sprite} alt={this.props.capitalize(this.state.name)} />
            <h5># {this.state.number}</h5>
          </div>
          <div className='col-1'></div>
          <div className='col-7 card bg-dark text-white pt-2'>
            <p className='description'>{this.state.description}</p>
            <h5>Type: {this.state.types}</h5>
            <h5>Height: {this.state.height} m</h5>
            <h5>Weight: {this.state.weight} kg</h5>
          </div>
        </div>
        <div className='text-center mt-3'>
          <Link to='/' className='return-link' >Return to Main Page</Link>
        </div>
      </div>
    );
  }
}

export default Detail;
