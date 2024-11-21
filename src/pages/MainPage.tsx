import { CardProject } from "../components/CardProject";
import { projects } from "../../data/projects";

export function MainPage() {
  return (
    <section>
      <h1>Projects</h1>
      <div className="grid grid-cols-2 gap-5">
        {projects.map((project) => (
          <CardProject project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
