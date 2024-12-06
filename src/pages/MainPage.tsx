import { CardProject } from "../components/CardProject";
import { projects } from "../../data/projects";

export function MainPage() {
  return (
    <section>
      <h1 className="mb-5">Projects</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {projects.map((project) => (
          <CardProject project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
