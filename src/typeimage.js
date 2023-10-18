import bug from "./images/bug.png";
import dark from "./images/dark.png";
import dragon from "./images/dragon.png";
import electric from "./images/electric.png";
import fairy from "./images/fairy.png";
import fighting from "./images/fighting.png";
import fire from "./images/fire.png";
import flying from "./images/flying.png";
import ghost from "./images/ghost.png";
import grass from "./images/grass.png";
import ground from "./images/ground.png";
import ice from "./images/ice.png";
import normal from "./images/normal.png";
import poison from "./images/poison.png";
import psychic from "./images/psychic.png";
import rock from "./images/rock.png";
import steel from "./images/steel.png";
import water from "./images/water.png";

function typeImage(type) {
	switch (type) {
		case "bug":
			return bug;
		case "dark":
			return dark;
		case "dragon":
			return dragon;
		case "electric":
			return electric;
		case "fairy":
			return fairy;
		case "fighting":
			return fighting;
		case "fire":
			return fire;
		case "flying":
			return flying;
		case "ghost":
			return ghost;
		case "grass":
			return grass;
		case "ground":
			return ground;
		case "ice":
			return ice;
		case "normal":
			return normal;
		case "poison":
			return poison;
		case "psychic":
			return psychic;
		case "rock":
			return rock;
		case "steel":
			return steel;
		case "water":
			return water;
		default:
	}
}
export default typeImage;
