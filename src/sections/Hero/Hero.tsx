import { FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import profile from '../../assets/images/profile.jpg';

// Hero section component that displays the main introduction, title, subtitle, and call-to-action buttons
export default function Hero() {
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="scroll-mt-14.25 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-8 sm:scroll-mt-16.25 md:flex-row md:pt-8 lg:scroll-mt-18.25"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex-1 md:w-auto"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center md:shrink-0"
      >
        <img
          src={profile}
          alt={t('header.name')}
          className="h-105 w-105 rounded-xl border border-zinc-800 object-cover md:h-80 md:w-80 lg:h-105 lg:w-105"
        />
      </motion.div>
    </section>
  );
}