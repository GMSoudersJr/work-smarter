export function getRandomInteger(max: number): number {
	return Math.floor(Math.random() * max);
};

export function randomizeWords(listOfWords: (string | undefined)[]): (string | undefined)[] {
	const result: (string | undefined)[] = [];

	function updateLists() {
		const randomIndexNumber = getRandomInteger(listOfWords.length);
		const randomWord = listOfWords.splice(randomIndexNumber, 1)[0];
		result.push(randomWord);
	}

	while (listOfWords.length > 0) updateLists();

	return result;
};

