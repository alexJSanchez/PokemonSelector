import React, { useState } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
	const [pokemon, setPokemon] = useState(["balbasour", "charmander"]);
	axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then((res) => {
		setPokemon(res.data.results.map((p) => p.name));
	});
	return <PokemonList pokemon={pokemon} />;
}

export default App;
