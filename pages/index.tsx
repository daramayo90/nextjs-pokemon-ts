import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { Button } from "@nextui-org/react";

const Home: NextPage = () => {
  return (
    <Layout title="Pokemons List">
      <Button color="gradient">Hello world!</Button>
    </Layout>
  );
};

export default Home;
