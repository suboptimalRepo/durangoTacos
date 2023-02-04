import Image from "next/image";
import css from "./index.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <a
        className={css.link}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>

      <a
        className={css.link}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Develop by SubOptimalSolutions
      </a>
    </footer>
  );
}
