import Link from "next/link";
import "./projects.css";
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
  const currentPath = router.query.router;
  let component;

  const findCurrentComp = () => routes.find((cmp) => cmp.slug == currentPath);

  useEffect(() => {
    const comp = findCurrentComp();
    if (currentPath !== comp.slug) {
      router.push("/404");
    }
    component = comp.component;
  }, [router]);

  return (
    <div className="projects">
      <div className="container-wrapper">
        <div className="projects-title">
          <h2>projects</h2>
        </div>
        <div className="projects-selection">
          <div className="project-web cat">
            <Link href="/webProjects">
              <div className="web-button">web app</div>
            </Link>
          </div>
          <div className="project-and cat">
            <Link href="/androidProjects">
              <div className="and-button">android app</div>
            </Link>
          </div>
        </div>
      </div>
      <div>{component}</div>
    </div>
  );
}

export default Projects;
