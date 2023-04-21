import { useAppContext } from "@/Context/AppContext";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Project from "../UI/WebAppUI/Project";
import AndroidProject from "../UI/androidProjectUI/AndroidProject";

export function WebSection() {
  const { getAllProjects } = useAppContext();
  const [projects, setProjects] = useState([]);

  const getProjectsData = async () => {
    const result = await getAllProjects();
    setProjects(
      result?.data.length > 0 &&
        result?.data?.filter((item) => item.type == "webApp")
    );
  };
  useEffect(() => {
    getProjectsData();
  }, []);
  // const projectsData =
  //   projects &&
  //   projects.filter((pro) => {
  //     return pro.type === "webApp";
  //   });

  return (
    <>
      <div className="projects-container">
        {projects.length !== 0 ? (
          projects?.map((project, index) => {
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
    </>
  );
}

export function AndroidSection() {
  const { getAllProjects } = useAppContext();
  const [projects, setProjects] = useState([]);

  const getProjectsData = async () => {
    const result = await getAllProjects();
    setProjects(
      result?.data.length > 0 &&
        result?.data?.filter((item) => item.type == "androidApp")
    );
  };
  useEffect(() => {
    getProjectsData();
  }, []);
  return (
    <>
      <div className="android-showcase-container">
        {projects.length != 0 ? (
          projects?.map((project, index) => {
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
    </>
  );
}
