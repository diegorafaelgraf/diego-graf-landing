import { BookOpen } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { learning } from '../../data/learning';

export default function Learning() {
  const { t } = useTranslation();

  return (
    <section
      id="learning"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <span className="font-medium text-blue-500">
        {t('learning.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('learning.title')}
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        {t('learning.description')}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {learning.map((course) => (
          <article
            key={course.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="flex items-center gap-3">
              <BookOpen size={20} />

              <span className="text-sm text-zinc-400">
                {course.provider}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {course.title}
            </h3>

            <span className="mt-2 inline-block text-sm text-blue-400">
              {course.category}
            </span>

            <div className="mt-6 flex justify-between text-sm">
              <span>{t('learning.progressLabel')}</span>
              <span>{course.progress}%</span>
            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}