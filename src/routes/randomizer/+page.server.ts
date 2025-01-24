import type { Actions } from './$types';

export const actions = {
	randomize: async ({ request }) => {
		//TODO Randomize the given list
		const data = await request.formData();

		const word_1 = data.get('word_1')?.toString().trimEnd();
		const word_2 = data.get('word_2')?.toString().trimEnd();
		const word_3 = data.get('word_3')?.toString().trimEnd();
		const word_4 = data.get('word_4')?.toString().trimEnd();
		const word_5 = data.get('word_5')?.toString().trimEnd();
		const word_6 = data.get('word_6')?.toString().trimEnd();
		const word_7 = data.get('word_7')?.toString().trimEnd();
		const word_8 = data.get('word_8')?.toString().trimEnd();
		const word_9 = data.get('word_9')?.toString().trimEnd();
		const word_10 = data.get('word_10')?.toString().trimEnd();
		const word_11 = data.get('word_11')?.toString().trimEnd();
		const word_12 = data.get('word_12')?.toString().trimEnd();
		const word_13 = data.get('word_13')?.toString().trimEnd();
		const word_14 = data.get('word_14')?.toString().trimEnd();
		const word_15 = data.get('word_15')?.toString().trimEnd();
		const word_16 = data.get('word_16')?.toString().trimEnd();
		const word_17 = data.get('word_17')?.toString().trimEnd();
		const word_18 = data.get('word_18')?.toString().trimEnd();
		const word_19 = data.get('word_19')?.toString().trimEnd();
		const word_20 = data.get('word_20')?.toString().trimEnd();

		const allWords = [
			word_1,
			word_2,
			word_3,
			word_4,
			word_5,
			word_6,
			word_7,
			word_8,
			word_9,
			word_10,
			word_11,
			word_12,
			word_13,
			word_14,
			word_15,
			word_16,
			word_17,
			word_18,
			word_19,
			word_20
		];

		function getRandomInteger(max: number): number {
			return Math.floor(Math.random() * max);
		}


		function randomizeWords(listOfWords: (string | undefined)[]): (string | undefined)[] {
			const result: (string | undefined)[] = [];

			function updateLists() {
				const randomIndexNumber = getRandomInteger(listOfWords.length);
				const randomWord = listOfWords.splice(randomIndexNumber, 1)[0];
				result.push(randomWord);
			}

			while (listOfWords.length > 0) updateLists();

			return result;
		}

		const randomizedWords = randomizeWords(allWords);

		return {
			success: true,
			data: randomizedWords
		}
	}
} satisfies Actions;
