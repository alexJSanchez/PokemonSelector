import React, { useEffect, useState } from "react";
import "./App.css";
import typeImage from "./typeimage";

console.log(typeImage("bug"));
export default function PokeStats({ stats }) {
	return (
		<>
			{console.log(stats)}
			{stats.id !== undefined ? (
				<div className="pokemon_card">
					<p># : {stats.id}</p>
					<p>Name: {stats.name}</p>
					<div className="pokemon_card_type">
						<div>
							<img
								className="pokemon_card_img"
								src={stats.image.front_default}
							></img>
						</div>
						{stats.type.map((item) => {
							return (
								<>
									{
										<img
											className="pokemon_card_type_image"
											src={typeImage(item.type.name)}
										></img>
									}
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
