import Link from "next/link";
import css from "./index.module.css";
import cx from "classnames";

type Props = {
  icon: JSX.Element;
  title: string;
  description?: string;
  routeTo: string;
  routeText: string;
  swap?: boolean;
};

const Section = (props: Props): JSX.Element => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h3 className={css.header}>{props.title}</h3>
        <p className={css.description}>{props.description}</p>
        <Link href={`/${props.routeTo}`} className={css.button}>
          <button>{props.routeText}</button>
        </Link>
      </div>

      <div className={css.icon}>{props.icon}</div>
    </div>
  );
};

export default Section;
