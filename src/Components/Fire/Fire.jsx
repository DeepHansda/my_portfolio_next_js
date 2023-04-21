import Link from "next/link";
import React from "react";
function Fire() {
  return (
    <div className="fire">
      <div className="fire-container">
        <div className="fire-card">
          <p>
          {"Hello! I'm a MERN stack, JavaScript, and blockchain developer with a passion for building innovative and impactful software solutions. With experience in MongoDB, Express, React, Node.js, and Solidity,I'm able to develop cutting-edge applications that leverage the power of the latest web and blockchain technologies.I'm always looking for new challenges and opportunities to grow my skills.Whether I'm working on a personal project or collaborating with a team, I'm committed to delivering high-quality work that exceeds expectations. Let's connect and see how we can bring your vision to life!"}
          </p>
          <Link href="/about">
            <div className="fire-button-container">
              <div className="fire-button">
                <p>About Me</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Fire;
