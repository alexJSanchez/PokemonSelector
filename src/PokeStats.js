import React, { useEffect, useState } from "react";
import "./App.css";
export default function PokeStats({ stats }) {
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
					<div className="pokemon_card_type">
						type :
						{stats.type.map((item) => {
							return (
								<>
									<img src={item.type.url}></img>
									<p>{item.type.name}</p>
								</>
							);
						})}
					</div>
					<p>lb : {stats.weight}lb</p>
				</div>
			) : (
				""
			)}
		</>
	);
}
