import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/information";
import { GoLinkExternal } from "react-icons/go";

export default function Projects() {
  return (
    <section className="space-y-4">
      <h1 className="font-bold text-2xl">Projects 🚀</h1>
      <Separator className="bg-neutral-500" />
      <section className="space-y-4">
        {projects.items.map((project, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                {project.link ? (
                  <>
                    <span className="hidden lg:inline font-semibold text-neutral-900">
                      {project.title}
                    </span>
                    <a
                      aria-label={`Visit ${project.title} website`}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-500 hover:text-blue-700 transition-colors lg:hidden"
                    >
                      {project.title}
                    </a>
                  </>
                ) : (
                  <span className="font-semibold text-neutral-900">
                    {project.title}
                  </span>
                )}
                {project.link && (
                  <a
                    aria-label={`Visit ${project.title} website`}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    <GoLinkExternal size={14} />
                  </a>
                )}
              </div>
              <p className="text-xs italic text-neutral-500">{project.duration}</p>
            </div>
            <p className="text-sm text-neutral-700">{project.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}