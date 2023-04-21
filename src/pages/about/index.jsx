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
            {"Hello! I'm a MERN stack, JavaScript, and blockchain developer with a passion for building innovative and impactful software solutions. With experience in MongoDB, Express, React, Node.js, and Solidity,I'm able to develop cutting-edge applications that leverage the power of the latest web and blockchain technologies.I'm always looking for new challenges and opportunities to grow my skills.Whether I'm working on a personal project or collaborating with a team, I'm committed to delivering high-quality work that exceeds expectations. Let's connect and see how we can bring your vision to life!"}
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
