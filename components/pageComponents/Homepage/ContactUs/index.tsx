import WebImage from "../../../WebImage";
import css from "./index.module.css";

const ContactUs = (): JSX.Element => {
  return (
    <div className="container">
      <WebImage
        src="logo.png"
        alt="Durangos Taco Logo"
        width={80}
        height={80}
      />
      <div className="title">
        <h1>Durango's Tacos</h1>
        <h2>Best Tacos north of the border</h2>
      </div>

      <div className="contactUs">
        <div className="callUs">
          Call as at <a href="tel:1-818-489-8111"> 1+818+489+6242</a>
        </div>
        <div className="bookASession">
          Or click here to book a time to talk
          <a href="tel:1-818-489-8111"> 1+818+489+6242</a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
