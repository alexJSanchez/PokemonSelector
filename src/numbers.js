// function getRandomNumbers(count, min, max) {
// 	const numbers = new Set();

// 	while (numbers.size < count) {
// 		numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
// 	}

// 	return Array.from(numbers);
// }

// const randomNumbers = getRandomNumbers(6, 1, 151);

// export default randomNumbers;

function getRandomNumbers(count, validNumbers) {
  const numbers = new Set();

  while (numbers.size < count) {
    const randomIndex = Math.floor(Math.random() * validNumbers.length);
    numbers.add(validNumbers[randomIndex]);
  }

  return Array.from(numbers);
}

const validNumbers = [
  1, 4, 7, 25, 133, 39, 52, 129, 16, 74, 54, 63, 66, 92, 104, 72, 19, 21, 23,
  27, 29, 32, 35, 37, 41, 50, 52, 54, 56, 58, 60, 66, 69, 74, 79, 81, 83, 84,
  86, 88, 90, 92, 96, 98, 108, 109, 100, 104, 111, 114, 115, 116, 118, 120, 122,
  123, 124, 125, 126, 127, 128, 129, 131, 132, 137, 138, 140, 142, 143, 147,
  150, 151,
];

const randomNumbers = getRandomNumbers(6, validNumbers);

export default randomNumbers;
