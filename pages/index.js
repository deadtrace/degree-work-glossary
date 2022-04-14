import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TermsList from "../components/TermsList";
import terms from "../data/terms";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Модель современного изоморфного фреймворка - Глоссарий</title>
        <meta
          name="description"
          content="Глоссарий для ВКР - Катюшин Станислав"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page-wrapper with-navbar with-navbar-fixed-bottom">
        <Header />
        <TermsList terms={terms} />
        <Footer />
      </div>
    </Fragment>
  );
}
