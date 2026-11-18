import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();
  const technologies = ['React', 'TypeScript', 'Tailwind CSS', 'Vite'];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-200">
              {t('footer.credit')}
            </p>
            <p className="mt-3 text-xs text-zinc-400">
              {t('footer.builtWith')}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-900/70 px-2 py-1 text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/diegorafaelgraf/diego-graf-landing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              <FaGithub size={16} aria-hidden="true" />
              {t('footer.source')}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {t('footer.contact')}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-5 text-xs text-zinc-400">
          <p>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
