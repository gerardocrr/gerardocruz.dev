import Github from "@/icons/Github";

interface Project {
  img: string;
  title: string;
  web: string;
  github: string;
  description: string;
  tags: string[];
}

export function CardProject({ project }: { project: Project }) {
  return (
    <article className="bg-slate-400 p-3 rounded-md">
      <div className="flex items-center justify-between mb-5">
        <div className="flex">
          <img src="/logo.ico" alt="" className="h-6 w-6 mr-2" />
          <h1>{project.title}</h1>
        </div>
        <a href={project.github}>
          <Github />
        </a>
      </div>
      <p>{project.description}</p>
      <div className="flex items-center">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="cursor-default rounded-md border text-xs px-2 py-1 bg-neutral-800/60 text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
