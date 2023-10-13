import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import randomNumbers from "./numbers";

export default function PokemonList({ pokemon }) {
	const [number, setNumber] = useState(randomNumbers);
	return (
		<>
			{number.map((num) => (
				<div>{pokemon[num].name}</div>
			))}
		</>
	);
}
