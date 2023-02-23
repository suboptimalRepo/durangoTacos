import WebImage from "../../../WebImage";
import css from "./index.module.css";

const EatWithUs = (): JSX.Element => {
  return (
    <div className={css.container}>
      <WebImage
        src="logo.png"
        alt="Durangos Taco Logo"
        width={800}
        height={800}
      />
      <div className={css.subTitle}>
        {/* <h1>Durango's Tacos</h1> */}
        <h2>Best Tacos north of the border</h2>
      </div>

      <div className={css.contactUs}>
        <div className="callUs">
          Call as at <a href="tel:1-818-489-8111"> 1+818+489+6242</a>
        </div>
        <div className="bookASession">
          Or click here to book a time to talk on
          <a href="https://calendly.com/durangostacos" className={css.linkBlue}>
            {" "}
            Calendly{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EatWithUs;
