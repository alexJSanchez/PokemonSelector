import React, { useEffect, useState } from "react";

export default function PokeStats({ stats }) {
	const [pokemonStats] = useState(stats);

	return (
		<>
			{console.log(stats)}
			{stats.id !== undefined ? (
				<div className="Pokemon_Card">
					<ul>
						<li className="Pokemon_Card_">
							<img src={stats.image.front_default}></img>
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
