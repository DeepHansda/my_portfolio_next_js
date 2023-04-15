import React from 'react'
import styles from './GitCommits.module.css'
import Image from 'next/image'
function GitCommits() {
  return (
    <div className={styles.gitContainer}>
        <div className={styles.gitTitle}>
          <h2>Git Commits.</h2>
        </div>
        <div className={styles.gitCommitsBg}>
            <div className={styles.gitImageContainer}>

            <Image src={"https://res.cloudinary.com/manjiro/image/upload/v1681529705/portfolio_images/git/contributions_1_eimhgn.png"} alt='contributions' width={776} height={714}/>
            </div>
        </div>
    </div>
  )
}

export default GitCommits