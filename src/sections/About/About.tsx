import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-32"
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
    </section>
  );
}