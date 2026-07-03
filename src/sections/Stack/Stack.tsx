import { useTranslation } from 'react-i18next';

export default function Stack() {
  const { t } = useTranslation();
  const items: string[] = t('stack.items', { returnObjects: true }) as string[];

  return (
    <section
      id="stack"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-32"
    >
      <span className="font-medium text-blue-500">
        {t('stack.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('stack.title')}
      </h2>

      <div className="mt-12 flex flex-wrap gap-4">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}