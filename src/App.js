import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";

function App() {
	const [pokemon, setPokemon] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then((res) => {
			setLoading(false);
			setPokemon(res.data.results);
		});
	}, []);
	if (loading) return "...loading";
	return <PokemonList pokemon={pokemon} />;
}

export default App;
