function getRandomNumbers(count, min, max) {
	const numbers = new Set();

	while (numbers.size < count) {
		numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
	}

	return Array.from(numbers);
}

const randomNumbers = getRandomNumbers(6, 1, 151);
console.log(randomNumbers);

export default randomNumbers;
