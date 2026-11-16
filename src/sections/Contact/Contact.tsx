import { FaLinkedin, FaGithub, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="scroll-mt-0 min-h-[calc(100vh-5rem)] mx-auto max-w-6xl px-6 py-32"
    >
      <span className="font-medium text-blue-500">
        {t('contact.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('contact.title')}
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        {t('contact.description')}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={t('contact.emailHref')}
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500"
        >
          <FaMailBulk size={30} />
          {t('contact.emailLabel')}
        </a>

        <a
          href={t('contact.whatsappHref')}
          target="_blank"
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500"
        >
          <FaWhatsapp size={30} />
          {t('contact.whatsappLabel')}
        </a>

        <a
          href={t('contact.linkedInHref')}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500"
        >
          <FaLinkedin size={30} />
          {t('contact.linkedInLabel')}
        </a>

        <a
          href={t('contact.githubHref')}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 transition-colors duration-300 hover:border-blue-500 hover:text-blue-500"
        >
          <FaGithub size={30} />
          {t('contact.githubLabel')}
        </a>
      </div>
    </section>
  );
}