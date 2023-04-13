import React, { useEffect, useState } from "react";
import "./sidebar.css";
import SocialContactBar from "../UI/ContactBar/ContactBar";
import { FiX } from "react-icons/fi";
import Link from "next/link";
function Sidebar({openSideBar,setOpenSideBar}) {
  const [screen,setScreen] = useState(window.innerWidth);
  useEffect(()=>{
    function handleSize() {
    setScreen(window.innerWidth)
     
    }
    window.addEventListener("resize", handleSize)
    return()=>{
      window.removeEventListener("resize", handleSize)
    }
  },[])
    // const [close,setClose] = useState(false);
  return (
    <div className="sidebar" style={{left: screen < 1280 ?  openSideBar ? '0' : '-100%' : '0'}}>
      <div className="sidebar-close-button" onClick={()=>{setOpenSideBar(false)}}>
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
