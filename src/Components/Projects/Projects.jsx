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
  const router = useRouter();
  const pathName = router.pathname;
  const currentPath = router.query.path;

  const findCurrentComp = () => routes.find((cmp) => cmp.slug == currentPath);

  useEffect(() => {
    if (pathName == "/") {
      setComponent(routes[0]);
    }
  }, []);
  useEffect(() => {
    const comp = findCurrentComp();
    console.log(comp);
    if (typeof comp == undefined && comp.slug !== currentPath) {
      router.push("/404");
    }
    if (pathName == "/") {
      setComponent(routes[0]);
    }
    if (currentPath == "webProjects") {
      setComponent(comp);
    } else {
      setComponent(comp);
    }
  }, [currentPath]);

  return (
    <div className="projects">
      <div className="container-wrapper">
        <div className="projects-title">
          <h2>projects</h2>
        </div>
        <div className="projects-selection">
          {routes.map((item, index) => (
            <div key={index} className="project-web cat">
              <Link href={{ pathname: "/", query: { path: item.slug } }}>
                <div className="web-button">{item.lable}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>{component?.component}</div>
    </div>
  );
}

export default Projects;
