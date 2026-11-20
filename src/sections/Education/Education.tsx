import { GraduationCap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const educationItems = ['systemsAnalyst', 'informationSystems'] as const;

export default function Education() {
  const { t } = useTranslation();

  return (
    <section
      id="education"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <span className="font-medium text-blue-400">
        {t('education.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('education.title')}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {educationItems.map((item) => {
          const itemKey = `education.items.${item}`;

          return (
            <article
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <GraduationCap size={24} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium tracking-wide text-blue-300">
                    {t(`${itemKey}.period`)}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-100">
                    {t(`${itemKey}.degree`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {t(`${itemKey}.institution`)}
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {t(`${itemKey}.description`)}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
