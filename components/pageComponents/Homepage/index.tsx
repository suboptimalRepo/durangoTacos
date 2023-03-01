import { ContactUs, FindUs, OrderOnline } from "../../Section/index";
import css from "./index.module.css";

const HomePage = (): JSX.Element => {
  return (
    <main className={css.mainContainer}>
      <ContactUs />
      <FindUs />
      <OrderOnline />
      {/* <EatWithUs /> */}
    </main>
  );
};

export default HomePage;
