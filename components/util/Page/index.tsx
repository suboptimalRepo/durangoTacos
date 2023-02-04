import { ReactNode } from "react";
import css from "./index.module.css";

type Props = {
  children?: ReactNode;
};

const Page = (props: Props): JSX.Element => {
  return <div className={css.page}>{props.children}</div>;
};

export default Page;
