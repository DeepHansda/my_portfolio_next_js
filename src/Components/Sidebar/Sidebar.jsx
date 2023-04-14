import { useAppContext } from "@/Context/AppContext";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import SocialContactBar from "../UI/ContactBar/ContactBar";
function Sidebar({ openSideBar, setOpenSideBar }) {
  const { screen } = useAppContext();
  return (
    <div
      className="sidebar"
      style={{ left: screen < 1280 ? (openSideBar ? "0" : "-100%") : "0" }}
    >
      <div
        className="sidebar-close-button"
        onClick={() => {
          setOpenSideBar(false);
        }}
      >
        <p>
          <FiX />
        </p>
      </div>
      <div className="side-container">
        <ul className="side-items">
          <Link href="/">
            <li className="side-item">
              <p>home</p>
            </li>
          </Link>
          <Link href="/resume">
            <li className="side-item">
              <p>resume</p>
            </li>
          </Link>
          <Link href="/contact">
            <li className="side-item">
              <p>contact</p>
            </li>
          </Link>
          <Link href="/about">
            <li className="side-item">
              <p>about</p>
            </li>
          </Link>
        </ul>

        <div className="side-contact-container">
          <SocialContactBar />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
