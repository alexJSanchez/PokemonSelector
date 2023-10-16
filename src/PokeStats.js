import React, { useEffect, useState } from "react";
import "./App.css";
export default function PokeStats({ stats }) {
	const [pokemonStats] = useState(stats);

	return (
		<>
			{console.log(stats)}
			{stats.id !== undefined ? (
				<div className="pokemon_card">
					<ul>
						<li>
							<img
								className="pokemon_card_img"
								src={stats.image.front_default}
							></img>
						</li>
						<li># : {stats.id}</li>
						<li>name: {stats.name}</li>
						<li>weight : {stats.weight}lb</li>
					</ul>
				</div>
			) : (
				""
			)}
		</>
	);
}
