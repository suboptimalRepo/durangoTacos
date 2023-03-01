import Section from "../../../Section/Section";
import { GiTacos } from "react-icons/gi";

const ContactUs = (): JSX.Element => {
  return (
    <Section
      routeText="Call Us"
      routeTo="contactUs"
      description="Need us to cater your next party?"
      title="Contact Us"
      icon={<GiTacos />}
      swap
    />
  );
};

export default ContactUs;
