import ContactUs from "./ContactUs";
import EatWithUs from "./EatWithUs";
import css from "./index.module.css";

const HomePage = (): JSX.Element => {
  return (
    <main className={css.mainContainer}>
      <ContactUs />
      {/* <EatWithUs /> */}
    </main>
  );
};

export default HomePage;
