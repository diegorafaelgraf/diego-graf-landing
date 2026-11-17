import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Hero section component that displays the main introduction, title, subtitle, and call-to-action buttons
export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="scroll-mt-14.25 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-8 sm:scroll-mt-16.25 md:flex-row md:pt-8 lg:scroll-mt-18.25"
    >
      <div>
        <span className="rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-400">
          {t('hero.badge')}
        </span>

        <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
          {t('hero.title').split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          {t('hero.subtitle')}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 md:flex-nowrap md:gap-2 lg:gap-4">
          <a
            href="#building"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500 md:px-3 lg:px-6"
          >
            {t('hero.cta.viewProjects')}
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium hover:border-zinc-500 md:px-3 lg:px-6"
          >
            {t('hero.cta.contact')}
          </a>
        </div>

        <div className="mt-10 flex gap-5">
          <a
            href="https://www.linkedin.com/in/diegograf/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition-colors duration-300 hover:text-blue-500"
          >
            <FaLinkedin size={35} />
          </a>
          <a
            href="https://github.com/diegorafaelgraf"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition-colors duration-300 hover:text-blue-500"
          >
            <FaGithub size={35} />
          </a>
          <a
            href="mailto:graf.drg@gmail.com"
            className="text-zinc-400 transition-colors duration-300 hover:text-blue-500"
          >
            <FaMailBulk size={35} />
          </a>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-zinc-400">
            developer.ts
          </span>
        </div>

        <div className="overflow-x-auto px-5 py-5">
          <div className="grid w-max min-w-full grid-cols-[2ch_auto] gap-x-4 font-mono text-[11px] leading-7 sm:text-xs">
            <span className="select-none text-right text-zinc-600">01</span>
            <span className="whitespace-nowrap text-zinc-300">
              <span className="text-fuchsia-400">const</span>{' '}
              <span className="text-sky-300">developer</span>{' '}
              <span className="text-zinc-500">= {'{'}</span>
            </span>

            <span className="select-none text-right text-zinc-600">02</span>
            <span className="whitespace-nowrap text-zinc-300">
              {'  '}<span className="text-sky-300">name</span>
              <span className="text-zinc-500">: </span>
              <span className="text-emerald-300">'Diego Graf'</span>
              <span className="text-zinc-500">,</span>
            </span>

            <span className="select-none text-right text-zinc-600">03</span>
            <span className="whitespace-nowrap text-zinc-300">
              {'  '}<span className="text-sky-300">role</span>
              <span className="text-zinc-500">: </span>
              <span className="text-emerald-300">'Software Developer'</span>
              <span className="text-zinc-500">,</span>
            </span>

            <span className="select-none text-right text-zinc-600">04</span>
            <span className="whitespace-nowrap text-zinc-300">
              {'  '}<span className="text-sky-300">focus</span>
              <span className="text-zinc-500">: [</span>
            </span>

            <span className="select-none text-right text-zinc-600">05</span>
            <span className="whitespace-nowrap text-emerald-300">
              {'    '}'software',
            </span>

            <span className="select-none text-right text-zinc-600">06</span>
            <span className="whitespace-nowrap text-emerald-300">
              {'    '}'automation',
            </span>

            <span className="select-none text-right text-zinc-600">07</span>
            <span className="whitespace-nowrap text-emerald-300">
              {'    '}'analytics',
            </span>

            <span className="select-none text-right text-zinc-600">08</span>
            <span className="whitespace-nowrap text-zinc-300">
              {'  '}<span className="text-zinc-500">],</span>
            </span>

            <span className="select-none text-right text-zinc-600">09</span>
            <span className="whitespace-nowrap text-zinc-300">
              {'  '}<span className="text-sky-300">approach</span>
              <span className="text-zinc-500">: </span>
              <span className="text-emerald-300">'build with purpose'</span>
              <span className="text-zinc-500">,</span>
            </span>

            <span className="select-none text-right text-zinc-600">10</span>
            <span className="whitespace-nowrap text-zinc-300">
              <span className="text-zinc-500">{'}'} as const;</span>
            </span>

            <span className="select-none text-right text-zinc-600">11</span>
            <span className="whitespace-nowrap text-zinc-300">
              <span className="text-fuchsia-400">export default</span>{' '}
              <span className="text-sky-300">developer</span>
              <span className="text-zinc-500">;</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-zinc-800 px-5 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] tracking-wide text-zinc-400">
            READY TO BUILD
          </span>
        </div>
      </div>
    </section>
  );
}