import Head from "next/head";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob List | Home</title>
        <meta name="keywords" content="jacob" />
      </Head>
      <div>
        <h1 className={homeStyles.title}>Home</h1>
        <p className={homeStyles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quis
          possimus harum voluptatibus autem repellendus earum accusamus suscipit
          officia ea?
        </p>
        <Link href="/jacob">
          <a className={homeStyles.btn}>check listing</a>
        </Link>
      </div>
    </>
  );
}
