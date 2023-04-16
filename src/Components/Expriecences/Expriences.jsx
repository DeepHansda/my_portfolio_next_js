import { useAppContext } from "@/Context/AppContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Expriences.module.css";
import { dateConverter } from "@/utils/dateConverter";

function Expriences() {
  const { getExpriences } = useAppContext();
  const [expriences, setExperiences] = useState([]);

  const fetchData = async () => {
    const data = await getExpriences();
    setExperiences(data?.data?.expriences);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.exprience}>
      <div className={styles.exprienceContainer}>
        <div className="container">
          <div className={styles.exprienceTitle}>
            <h2>Expriences.</h2>
          </div>
          <div className="steps">
            {expriences?.length > 0 &&
              expriences?.map((ex, i) => {
                return (
                  <div key={i} className="steps-container">
                    <div className={styles.expContent}>
                      <h2>{ex.title}</h2>
                      <div className={styles.expCompany}>
                        <h4>{ex.companyName}</h4>
                        <p> &middot; {ex.position}</p>
                      </div>
                      <div className={styles.stepDate}>
                        <p>{dateConverter(ex.duration.joiningDate)}</p>-
                        <p>{dateConverter(ex.duration.leavingDate)}</p>
                      </div>
                      <div
                        className={styles.expriencesStepsDesc}
                        dangerouslySetInnerHTML={{ __html: ex.des }}
                      ></div>

                      <div className={styles.expSkillsContainer}>
                        {ex.skills.map((skill) => (
                          <div key={skill.title} className={styles.expSkills}>
                            <p>&middot; {skill.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <i className="step-line"></i>
                    <div className={styles.expriencesStepsImg}>
                      <Image
                        src={ex.companyLogo}
                        alt={ex.companyLogo}
                        width={65}
                        height={65}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expriences;
