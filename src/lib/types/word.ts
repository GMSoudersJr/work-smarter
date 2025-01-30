export type TWord = {
	id?: string;
	word?: string;
	isCopied: boolean;
	initialIndex?: number;
	indexDifference: (randomizedIndex: number) => (number | undefined);
	capitalized: () => void;
};
