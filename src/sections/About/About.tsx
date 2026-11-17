import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="scroll-mt-0 mx-auto grid max-w-6xl items-center gap-12 px-6 py-32 md:grid-cols-[minmax(0,1fr)_auto]"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-blue-500 font-medium">
          {t('about.section')}
        </span>

        <h2 className="mt-4 text-4xl font-bold">
          {t('about.title')}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          {t('about.content').split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </motion.div>
      <img
        src="/images/profile-960.webp"
        srcSet="/images/profile-640.webp 640w, /images/profile-960.webp 960w, /images/profile-1280.webp 1280w"
        sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, (min-width: 468px) 420px, calc(100vw - 3rem)"
        alt={t('header.name')}
        width={420}
        height={420}
        loading="lazy"
        className="aspect-square w-full max-w-[420px] rounded-xl border border-zinc-800 object-cover md:h-80 md:w-80 md:max-w-none lg:h-105 lg:w-105"
      />
    </section>
  );
}