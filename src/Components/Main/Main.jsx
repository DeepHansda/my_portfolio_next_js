import { useAppContext } from "@/Context/AppContext";
import { useEffect } from "react";
import Fire from "../Fire/Fire";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

function Main() {
  const {setOpenSideBar}= useAppContext();
  useEffect(() => {
  setOpenSideBar(false);
  }, []);

  return (
    <div className="main">
      <Home />
      <Fire />
      <Projects />
      <Footer />
    </div>
  );
}

export default Main;
