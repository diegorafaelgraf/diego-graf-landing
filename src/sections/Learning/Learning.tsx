import SpecializationCard from '../../components/Learning/SpecializationCard';
import CourseCard from '../../components/Learning/CourseCard.tsx';
import { learnings } from '../../data/learning';
import { useTranslation } from 'react-i18next';

export default function Learning() {
  const { t } = useTranslation();

  return (
    <section
      id="learning"
      className="mx-auto max-w-6xl px-6 py-32 overflow-hidden"
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

      <div className="mt-12 space-y-6">
        {learnings.map((item) => {
          if (item.type === 'specialization') {
            return (
              <SpecializationCard
                key={item.title}
                item={item}
              />
            );
          }

          if (item.type === 'course') {
            return (
              <CourseCard
                key={item.title}
                item={item}
              />
            );
          }

          return null;
        })}
      </div>
    </section>
  );
}