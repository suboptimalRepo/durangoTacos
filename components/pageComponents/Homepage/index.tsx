import css from "./index.module.css";

const HomePage = (): JSX.Element => {
  return (
    <main className={css.mainContainer}>
      <h1 className={css.welcomeHeader}>
        Welcome to{" "}
        <a className={css.linkBlue} href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <p className={css.paragraph}>
        Get started by editing <code className={css.code}>pages/index.tsx</code>
      </p>

      <div className={css.optionsContainer}>
        <a href="https://nextjs.org/docs" className={css.options}>
          <h3 className={css.optionHeader}>Documentation &rarr;</h3>
          <p className={css.optionDescription}>
            Find in-depth information about Next.js features and its API.
          </p>
        </a>

        <a href="https://nextjs.org/learn" className={css.options}>
          <h3 className={css.optionHeader}>Learn &rarr;</h3>
          <p className={css.optionDescription}>
            Learn about Next.js in an interactive course with quizzes!
          </p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={css.options}
        >
          <h3 className={css.optionHeader}>Examples &rarr;</h3>
          <p className={css.optionDescription}>
            Discover and deploy boilerplate example Next.js projects.
          </p>
        </a>

        <a
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={css.options}
        >
          <h3 className={css.optionHeader}>Deploy &rarr;</h3>
          <p className={css.optionDescription}>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
};

export default HomePage;
