export type TWord = {
	id: string;
	word: string;
	isCopied: boolean;
	capitalized: () => void;
};
