import React from "react";
import "./App.css";
import { PokeList } from "./components/PokeList/PokeList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/brunomoreirazup/kanto-pokedex-json/master/pokedex.json"
    )
      .then(response => response.json())
      .then(pokedex =>
        this.setState({
          pokemons: pokedex.pokemons
        })
      );
  }

  render() {
    return (
      <div className="App">
        <h1> React Pokédex </h1>
        {console.log(this.state.pokemons)}
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
