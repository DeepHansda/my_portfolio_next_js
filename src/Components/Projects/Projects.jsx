import Link from "next/link";
import { useRouter } from "next/router";
import { AndroidSection, WebSection } from "./SectionRoutes";
import { useEffect, useState } from "react";

function Projects() {
  const routes = [
    {
      slug: "webProjects",
      lable: "web app",
      component: <WebSection />,
    },
    {
      slug: "androidProjects",
      lable: "android app",
      component: <AndroidSection />,
    },
  ];
  const [component, setComponent] = useState(routes[0]);
  const [pathName, setPathName] = useState("webProjects");
  const router = useRouter();

  const findCurrentComp = () => routes.find((cmp) => cmp.slug == pathName);

  const handlePath = (path) => {
    setPathName(path);
  };
  useEffect(() => {
    if (pathName == "webProjects") {
      setComponent(routes[0]);
    }
  }, []);
  useEffect(() => {
    const comp = findCurrentComp();
    console.log(comp);
    if (typeof comp == undefined && comp.slug !== pathName) {
      router.push("/404");
    }
    if (pathName == "webProjects") {
      setComponent(routes[0]);
    } else {
      setComponent(comp);
    }
  }, [pathName]);

  return (
    <div className="projects">
      <div className="container-wrapper">
        <div className="projects-title">
          <h2>projects</h2>
        </div>
        <div className="projects-selection">
          {routes.map((item, index) => (
            <div key={index} className="project-web cat">
              <div className="web-button" onClick={() => handlePath(item.slug)}>
                {item.lable}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>{component?.component}</div>
    </div>
  );
}

export default Projects;
