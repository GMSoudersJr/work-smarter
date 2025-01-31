import type { TWord } from '$lib/types';

export function removeWordFromList(word: TWord, list: TWord[]): void {
	const index = list.indexOf(word);
	list.splice(index, 1);
}

export function getRandomInteger(max: number): number {
	return Math.floor(Math.random() * max);
}

function isSamePositionAsInitial(entry: TWord, index: number) {
	return entry.initialIndex === index;
}

export function randomizeEntries(entries: TWord[]): TWord[] {
	const result: TWord[] = [];
	const mutableEntries = entries.slice();

	function updateResult() {
		const randomIndexNumber = getRandomInteger(mutableEntries.length);
		const randomEntry = mutableEntries.splice(randomIndexNumber, 1)[0];
		result.push(randomEntry);
	}

	while (mutableEntries.length > 0) updateResult();


	if (result.length > 1) {
		const someWordInSamePosition = result.some(isSamePositionAsInitial);
		
		if (someWordInSamePosition) return randomizeEntries(result);
	}

	return result;
}

export function focusOnInputElement() {
	document.getElementsByTagName('input').namedItem('word-input')?.focus();
}

export function capitalize(word: string): string {
	const splitWord = word.split('');
	splitWord.splice(0, 1, splitWord[0].toUpperCase()).join('');
	return splitWord.join('');
}
