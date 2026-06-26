import { CircleCheck } from 'lucide-react';

import { useTranslation } from 'react-i18next';

export default function Now() {
  const { t } = useTranslation();
  const items: string[] = t('now.items', { returnObjects: true }) as string[];

  return (
    <section
      id="now"
      className="mx-auto max-w-6xl px-6 py-32"
    >
      <span className="font-medium text-blue-500">
        {t('now.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('now.title')}
      </h2>

      <div className="mt-12 grid gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5"
          >
            <CircleCheck className="text-green-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}