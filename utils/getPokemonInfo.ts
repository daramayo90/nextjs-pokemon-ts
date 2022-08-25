import { pokeApi } from '../api';
import { PokemonFull } from '../interfaces';

/**
 * Refactor function to work only with the information necessary for each pokemon,
 * instead of creating an hughe JSON file for each pokemon with all the info
 */
const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (e) {
    return null;
  }
};

export default getPokemonInfo;
