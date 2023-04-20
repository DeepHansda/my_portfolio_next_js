import React from "react";
import styles from "./GitCommits.module.css";
import Image from "next/image";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
function GitCommits() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "manjiro",
    },
  });
  const img = cld.image("contributions.pngdeep");

  return (
    <div className={styles.gitContainer}>
      <div className={styles.gitTitle}>
        <h2>Git Commits.</h2>
      </div>
      <div className={styles.gitCommitsBg}>
        <div className={styles.gitImageContainer}>
          <AdvancedImage cldImg={img} />
        </div>
      </div>
    </div>
  );
}

export default GitCommits;
