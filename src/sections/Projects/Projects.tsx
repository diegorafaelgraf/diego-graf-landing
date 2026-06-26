import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <span className="font-medium text-blue-500">
        {t('projects.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('projects.title')}
      </h2>

      <div className="mt-12 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
              {t('projects.activeBadge')}
            </span>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
              React
            </span>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
              Node.js
            </span>

            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
              MongoDB
            </span>
          </div>

          <h3 className="mt-6 text-3xl font-bold">
            {t('projects.items.studyTracker.title')}
          </h3>

          <p className="mt-6 max-w-3xl text-zinc-400 leading-8">
            {t('projects.items.studyTracker.description')}
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/diegorafaelgraf/study-tracker"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3"
            >
              <FaGithub size={30} />
              {t('projects.sourceCode')}
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3"
            >
              <FaExternalLinkAlt size={30} />
              {t('projects.liveDemo')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}