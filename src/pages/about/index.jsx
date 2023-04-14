import { useAppContext } from "@/Context/AppContext";
import { Fragment, useEffect } from "react";
import SocialContactBar from "../../Components/UI/ContactBar/ContactBar";
import EmailNumber from "../../Components/UI/EmailNumber/EmailNumber";
import aboutData from "../../Data/AboutData";
import Head from "next/head";

function About() {
  const { setOpenSideBar } = useAppContext();
  useEffect(() => {
    setOpenSideBar(false);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Deep Hansda | About</title>
      </Head>
      <div className="about">
        <div className="about-text">
          <div className="about-title">
            <h1>about myself</h1>
          </div>

          <div className="about-intro-myself">
            <p>
              Hello ,<br /> My Name is Deep Hansda. Currently, I pursuing 3
              Years diploma course from Kanyapur Polytechnic - Asansol,India. My
              interests are in MERN Full-Stack Web Development. I have extensive
              knowledge of HTML, CSS, JavaScript, Node.js, ReactJS , MySQL and
              GitHub. I love to create beautiful performant products with
              delightful user experiences.
            </p>
          </div>
        </div>

        <div className="myTimeline">
          <div class="bg-gradient_solid">
            <div class="container">
              <div class="section-header">
                <h2>Education</h2>
                <hr />
              </div>
              <div class="steps">
                {aboutData.map((d, i) => {
                  return (
                    <div key={i} class="steps-container">
                      <div class="content">
                        <h2>{d.course}</h2>
                        <p>{d.university}</p>
                      </div>
                      <i class="step-line"></i>
                      <div class="date">{d.date}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="emailNumber-container">
          <EmailNumber />
        </div>
        <div className="about-social-wrapper-container">
          <SocialContactBar />
        </div>
      </div>
    </Fragment>
  );
}

export default About;
