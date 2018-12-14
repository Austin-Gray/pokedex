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
    }
  }

  render() {
    if (!this.props.selection) return <Redirect push to='/' />
    return (
      <div>
        <div>
          <h1>{this.props.capitalize(this.state.name)}</h1>
        </div>
        <div>
          <img src={this.state.sprite} alt={this.props.capitalize(this.state.name)} />
          <p># {this.state.number}</p>
        </div>
        <div>
          <p>Type: {this.state.types}</p>
          <p>Height: {this.state.height} m</p>
          <p>Weight: {this.state.weight} kg</p>
        </div>
        <Link to='/' >Return to Main Page</Link>
      </div>
    );
  }
}

export default Detail;
