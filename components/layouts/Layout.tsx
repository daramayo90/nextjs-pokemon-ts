import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: ReactNode;
  title?: string;
}

const domain = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Damian Aramayo' />
        <meta name='description' content='Pokemons information' />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property='og:title' content={`Information about the pokemon ${title}`} />
        <meta property='og:description' content={`This page is about ${title}`} />
        <meta property='og:image' content={`${domain}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}>
        {children}
      </main>
    </>
  );
};
