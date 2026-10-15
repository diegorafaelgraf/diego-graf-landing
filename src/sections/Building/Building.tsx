import { FaGithub, FaMailBulk } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { baseProjects } from '../../data/projects';

export default function Building() {
  const { t } = useTranslation();

  return (
    <section
      id="building"
      className="scroll-mt-0 mx-auto max-w-6xl px-6 py-32"
    >
      <span className="font-medium text-blue-500">
        {t('building.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('building.title')}
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        {t('building.description')}
      </p>

      <div className="mt-12 grid gap-6">
        {baseProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">
                  {t(`projects.items.${project.id}.title`)}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {t(`projects.items.${project.id}.description`)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="min-w-55">
                <div className="flex items-center justify-between text-sm">
                  <span>{t(`projects.items.${project.id}.status`)}</span>
                  <span>{project.progress}%</span>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>

                <div className="mt-6 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub size={30} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaMailBulk size={30} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}