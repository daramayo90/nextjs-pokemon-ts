import { FC, ReactNode } from "react";
import Head from "next/head";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Damian Aramayo" />
        <meta name="description" content="Pokemons information" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      </Head>
      {/**Navbar */}
      <main>{children}</main>
    </>
  );
};
