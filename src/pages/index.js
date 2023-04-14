import Fire from "@/Components/Fire/Fire";
import Footer from "@/Components/Footer/Footer";
import Home from "@/Components/Home/Home";
import Projects from "@/Components/Projects/Projects";
import { useAppContext } from "@/Context/AppContext";
import Head from "next/head";
import { Fragment, useEffect } from "react";


export default function Index() {
  const { setOpenSideBar } = useAppContext();
  useEffect(() => {
    setOpenSideBar(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Deep Hansda | Home</title>
      </Head>
      <div className="main">
        <Home />
        <Fire />
        <Projects />
        <Footer />
      </div>
    </Fragment>
  );
}
