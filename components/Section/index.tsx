import Section from "../Section/Section";
import { GiTacos } from "react-icons/gi";
import { GiFoodTruck } from "react-icons/gi";
import { IoMdCall } from "react-icons/io";

export const ContactUs = (): JSX.Element => {
  return (
    <Section
      routeText="Call Us"
      routeTo="contactUs"
      description="Need us to cater your next party?"
      title="Contact Us"
      icon={<IoMdCall />}
      swap
    />
  );
};

export const OrderOnline = (): JSX.Element => {
  return (
    <Section
      routeText="Order on Grubhub"
      routeTo="orderOnline"
      description="Make any night a taco night"
      title="Order Online"
      icon={<GiTacos />}
      swap
    />
  );
};

export const FindUs = (): JSX.Element => {
  return (
    <Section
      routeText="Find us"
      routeTo="findUs"
      description="Need directions or our hours"
      title="Find us"
      icon={<GiFoodTruck />}
      swap
    />
  );
};
