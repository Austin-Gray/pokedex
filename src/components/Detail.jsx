import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sprite: ''
    };
    this.clearState = this.clearState.bind(this);
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.selection}/`)
      .then(response => {
        console.log(response)
        this.setState({
          name: response.data.name,
          sprite: response.data.sprites.front_default
        })
      })
  }

  clearState() {
    this.setState({
      name: '',
      sprite: ''
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.sprite} alt='Pokemon image not available' />
        <Link to='/' onClick={this.clearState}>Home</Link>
      </div>
    );
  }
}

export default Detail;
