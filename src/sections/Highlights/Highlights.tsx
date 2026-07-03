import { useTranslation } from 'react-i18next';

export default function QuickStats() {
  const { t } = useTranslation();
  const stats: { value: string; label: string }[] = t('highlights.stats', { returnObjects: true }) as any;

  return (
    <section
      id="highlights"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-32"
    >
      <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div className="text-3xl font-bold">
              {stat.value}
            </div>

            <div className="mt-2 text-zinc-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}