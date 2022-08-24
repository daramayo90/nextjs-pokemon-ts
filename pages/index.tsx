import { FC } from "react";
import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { SmallPokemon, PokemonListResponse } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

/** We're using getStaticProps to fetch the data, because we need ONLY and ALWAYS 151 */
const Home: FC<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemons List">
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={id}>
            #{id} - {name}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

/**
getStaticProps should be used when:
The data required to render the page is available at build time ahead of a user’s request.
The data comes from a headless CMS.
The data can be publicly cached (not user-specific).
The page must be pre-rendered (for SEO) and be very fbast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
getStaticProps is server-side render, the information doesn't go to the client (with exceptions of the props)
It can be used to read databases, send secret tokens using JWT
*/
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const imageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `${imageUrl}${i + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
