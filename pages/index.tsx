import type { NextPage } from "next";
import Page from "../components/util/Page";
import HomePage from "../components/pageComponents/Homepage";

const Home: NextPage = () => {
  return (
    <Page>
      <HomePage />
    </Page>
  );
};

export default Home;
