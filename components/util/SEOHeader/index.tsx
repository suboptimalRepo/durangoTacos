import { ReactNode } from "react";
import css from "./index.module.css";
import Head from "next/head";

const SEOHeader = (): JSX.Element => {
  return (
    <Head>
      <title>Durango's Tacos</title>
      <meta name="tile" content="Durango's Tacos" />
      <meta
        name="description"
        content="Best Tacos north of Mexico, come try our home made sauces"
      />
      <meta
        property="og:description"
        content="Best Tacos north of Mexico, come try our home made sauces"
      />
      <meta
        property="twitter:description"
        content="Best Tacos north of Mexico, come try our home made sauces"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Durango's Tacos" />
      {/* add images here */}
      {/* double check the twitter card martin wants */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@durangostacos" />
      <meta name="twitter:url" content="localhost" />
      <meta name="twitter:title" content="Durango's Tacos" />
    </Head>
  );
};

export default SEOHeader;
