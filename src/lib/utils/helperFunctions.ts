import type { TWord } from '$lib/types';

export function removeWordFromList(word: TWord, list: TWord[]): void {
	const index = list.indexOf(word);
	list.splice(index, 1);
}

export function getRandomInteger(max: number): number {
	return Math.floor(Math.random() * max);
}

export function randomizeEntries(entries: TWord[]): TWord[] {
	const result: TWord[] = [];

	function updateLists() {
		const randomIndexNumber = getRandomInteger(entries.length);
		const randomEntry = entries.splice(randomIndexNumber, 1)[0];
		result.push(randomEntry);
	}

	while (entries.length > 0) updateLists();

	return result;
}

export function focusOnInputElement() {
	document.getElementsByTagName('input').namedItem('word-input')?.focus();
}
