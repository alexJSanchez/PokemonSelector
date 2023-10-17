import React, { useEffect, useState } from "react";
import "./App.css";
export default function PokeStats({ stats }) {
	const [pokemonStats] = useState(stats);

	return (
		<>
			{console.log(stats)}
			{stats.id !== undefined ? (
				<div className="pokemon_card">
					<div>
						<img
							className="pokemon_card_img"
							src={stats.image.front_default}
						></img>
					</div>
					<p># : {stats.id}</p>
					<p>Name: {stats.name}</p>
					<p>lb : {stats.weight}lb</p>
				</div>
			) : (
				""
			)}
		</>
	);
}
