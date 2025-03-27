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
    <article className="bg-transparent border border-black dark:border-neutral-100 p-3 rounded-md">
      <div className="flex items-center justify-between mb-5">
        <div className="flex">
          <span>{project.img}</span>
          <a className="hover:underline" href={project.web} target="_blank">
            {project.title}
          </a>
        </div>
        <a href={project.github} target="_blank">
          <Github />
        </a>
      </div>
      <p className="mb-5">{project.description}</p>
      <div className="flex items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="cursor-default rounded-md border text-xs px-2 py-1 dark:bg-neutral-800 text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
