const toggleFavorite = (id: number) => {
  // if localStorage key exists: getItem / If localStorage key does not exists: []
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  // First, if the 'id' is already included, return all the pokemons in the array, except the new one (avoid duplicates)
  // Second, if it's not included then add the id to the array
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false; // If it's server-side render

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default { toggleFavorite, existInFavorites, pokemons };
