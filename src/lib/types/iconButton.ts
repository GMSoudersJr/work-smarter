import { Icon as IconType } from "lucide-svelte";

export type TIconButton = {
	title: (word: string) => string;
	icon: typeof IconType;
	iconSize?: string;
	iconColor?: string;
	iconStrokeWidth?: number;
};
