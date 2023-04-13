import { useAppContext } from "@/Context/AppContext";
import { CircularProgress, Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../App";
import Project from "../UI/WebAppUI/Project";
import AndroidProject from "../UI/androidProjectUI/AndroidProject";
import "./cat.css";

export function WebSection() {
  const { getAllProjects, isloading } = useAppContext();
  const [projects,setProjects] = useState([])

  const getProjectsData = async() =>{
    const result = await getAllProjects()
    console.log(result)
  }
  useEffect(()=>{
    getProjectsData()
  },[])
  // const projectsData =
  //   projects &&
  //   projects.filter((pro) => {
  //     return pro.type === "webApp";
  //   });

  return (
    <>
      {isloading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div className="projects-container">
          {projects.length !== 0 ? (
            projects.map((project, index) => {
              return <Project project={project} key={project._id} />;
            })
          ) : (
            <Container maxWidth="xs">
              <Typography component="p" variant="h6" sx={{ color: "#fff" }}>
                Projects are not Available!
              </Typography>
            </Container>
          )}
        </div>
      )}
    </>
  );
}

export function AndroidSection() {
  const { projects, loading } = useContext(ProjectContext);

  const projectsData =
    projects &&
    projects.filter((pro) => {
      return pro.type === "androidApp";
    });
  return (
    <>
      {loading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <div className="android-showcase-container">
          {projectsData.length != 0 ? (
            projectsData.map((project, index) => {
              return <AndroidProject project={project} key={project._id} />;
            })
          ) : (
            <Container maxWidth="xs">
              <Typography component="p" variant="h6" sx={{ color: "#fff" }}>
                Projects are not Available!
              </Typography>
            </Container>
          )}
        </div>
      )}
    </>
  );
}
