import Expriences from "@/Components/Expriecences/Expriences";
import Fire from "@/Components/Fire/Fire";
import Footer from "@/Components/Footer/Footer";
import GitCommits from "@/Components/GitCommits/GitCommits";
import Home from "@/Components/Home/Home";
import Projects from "@/Components/Projects/Projects";
import Loader from "@/Components/UI/Loader";
import { useAppContext } from "@/Context/AppContext";
import Head from "next/head";
import { Fragment, useEffect } from "react";

export default function Index() {
  const { setOpenSideBar, isLoading } = useAppContext();
  useEffect(() => {
    setOpenSideBar(false);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Deep Hansda | Home</title>
      </Head>
      <Loader isLoading={isLoading} />

      <div className="main">
        <Home />
        <Fire />
        <Expriences />
        <GitCommits />
        <Projects />
        <Footer />
      </div>
    </Fragment>
  );
}
