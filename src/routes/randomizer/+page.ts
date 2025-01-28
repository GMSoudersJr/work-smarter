import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		title: 'Randomizer',
		header: 'RANDOMIZER',
		description: 'Randomize your word list as it is updated',
		ogImageUrl:
			'https://lh3.googleusercontent.com/pw/AP1GczNrM04XT_eRThE3U2gfKpYZWvAwxzTaVOukL7bIu8mRBRMObxxzHraf4QdCeP3_p1FkmOHe3NRYvzq4SY8tJuLDKpEvomaBRYd8J7oaJVPzxPTIK-WaopYwHce2P-W4cNAyh38Ot97vkBv8_LVZGDkWTg=w200-h200-s-no-gm?authuser=0'
	};
};
