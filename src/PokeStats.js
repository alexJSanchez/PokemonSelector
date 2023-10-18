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
					<div className="pokemon_card_top">
						<p>{stats.id}</p>
						<p>{stats.name}</p>
					</div>
					<div>
						<img
							className="pokemon_card_img"
							src={stats.image.front_default}
						></img>
					</div>
					<div className="pokemon_card_type">
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
