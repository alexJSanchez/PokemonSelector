import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import randomNumbers from "./numbers";
import axios from "axios";
import PokeStats from "./PokeStats";

export default function PokemonList({ pokemon }) {
	const [number, setNumber] = useState(randomNumbers);
	const [selectedPoke, setSelectedPoke] = useState("");
	const [pokeDestination, setPokeDestination] = useState("");
	const [pokeStats, setPokeStats] = useState([]);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${selectedPoke}`)
			.then((res) => {
				console.log(res.data);
				setPokeStats({
					id: res.data.id,
					name: res.data.name,
					weight: res.data.weight,
					image: res.data.sprites,
				});
			});
	}, [selectedPoke]);
	return (
		<>
			<div className="App-header">
				<PokeStats stats={pokeStats} />
				<div className="result_box">
					{number.map((num) => (
						<div key={num}>
							<p>{pokemon[num].name}</p>

							<button
								onClick={() => (
									setPokeDestination(pokemon[num].url),
									setSelectedPoke(pokemon[num].name)
								)}
								key={pokemon[num].name}
							>
								{pokemon[num].name} Stats
							</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
