import { useContext, useEffect } from "react";
import { ProjectContext } from "../../App";
import Fire from "../Fire/Fire";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

function Main() {
  const states = useContext(ProjectContext);
  useEffect(() => {
    states.setOpenSideBar(false);
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
