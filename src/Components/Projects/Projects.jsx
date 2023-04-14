import Link from "next/link";
import { useRouter } from "next/router";
import { AndroidSection, WebSection } from "./SectionRoutes";
import { useEffect } from "react";

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
  const router = useRouter();
  const currentPath = router.query.path;
  let component = routes[0].component;

  console.log(currentPath);
  const findCurrentComp = () => routes.find((cmp) => cmp.slug == currentPath);

  useEffect(() => {
    const comp = findCurrentComp();
    console.log(comp)
    if (typeof comp == undefined && comp.slug !== currentPath) {
      router.push("/404");
    } if (currentPath == "webProjects") {
      component = routes[0].component;
    } else {
      component = comp?.component;
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
      <div>{component}</div>
    </div>
  );
}

export default Projects;
