import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Download, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { professionalExperiences } from '../../data/professionalExperience';

const INITIAL_EXPERIENCE_COUNT = 3;

export default function ProfessionalExperience() {
  const { t, i18n } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedExperienceId, setSelectedExperienceId] = useState<string | null>(null);
  const selectedExperience = professionalExperiences.find(
    (experience) => experience.id === selectedExperienceId,
  );
  const hiddenExperienceCount = Math.max(
    professionalExperiences.length - INITIAL_EXPERIENCE_COUNT,
    0,
  );
  const cvPath = (i18n.resolvedLanguage ?? i18n.language).startsWith('es')
    ? '/cv-es.pdf'
    : '/cv-en.pdf';

  useEffect(() => {
    const dialog = dialogRef.current;

    if (selectedExperience && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedExperience]);

  const closeExperienceDialog = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }

    setSelectedExperienceId(null);
  };

  const renderExperience = (
    experience: (typeof professionalExperiences)[number],
    isHidden = false,
  ) => {
    const translationKey = `professionalExperience.items.${experience.id}` as const;
    const location = t(`${translationKey}.location`, { defaultValue: '' });

    return (
      <li
        key={experience.id}
        className={`relative grid gap-3 pl-10 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8 md:pl-0 ${isHidden ? 'hidden' : ''}`}
      >
        <span
          aria-hidden="true"
          className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-400 bg-zinc-950 md:left-[9.75rem]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>

        <p className="pt-0.5 text-sm font-medium tracking-wide text-emerald-300">
          {t(`${translationKey}.period`)}
        </p>

        <article className="group border-b border-zinc-800 pb-8 transition-colors hover:border-emerald-500/40 md:pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold text-zinc-100">
              {t(`${translationKey}.role`)}
            </h3>
            <span className="text-zinc-600" aria-hidden="true">/</span>
            <p className="text-zinc-300">{t(`${translationKey}.company`)}</p>
          </div>

          {location && <p className="mt-1 text-sm text-zinc-400">{location}</p>}

          <button
            type="button"
            onClick={() => setSelectedExperienceId(experience.id)}
            aria-haspopup="dialog"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-300 transition-colors hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
          >
            {t('professionalExperience.viewDetails')}
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </article>
      </li>
    );
  };

  return (
    <section
      id="professional-experience"
      className="scroll-mt-20 mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <span className="font-medium text-emerald-400">
        {t('professionalExperience.section')}
      </span>

      <h2 className="mt-4 text-4xl font-bold">
        {t('professionalExperience.title')}
      </h2>

      <p className="mt-6 max-w-2xl text-zinc-400">
        {t('professionalExperience.description')}
      </p>

      <a
        href={cvPath}
        download
        className="mt-7 inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
      >
        <Download size={17} aria-hidden="true" />
        {t('professionalExperience.downloadCv')}
      </a>

      {professionalExperiences.length === 0 ? (
        <div className="mt-12 flex items-center gap-4 border-y border-zinc-800 py-8 text-zinc-400">
          <BriefcaseBusiness
            size={22}
            className="shrink-0 text-emerald-400"
            aria-hidden="true"
          />
          <p>{t('professionalExperience.empty')}</p>
        </div>
      ) : (
        <>
          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-[7px] top-2 w-px bg-zinc-800 md:left-[10.25rem]"
            />
            <ol id="professional-experience-list" className="space-y-8">
              {professionalExperiences.map((experience, index) =>
                renderExperience(
                  experience,
                  !isExpanded && index >= INITIAL_EXPERIENCE_COUNT,
                ),
              )}
            </ol>
          </div>

          {hiddenExperienceCount > 0 && (
            <div className="mt-8 pl-10 md:pl-[12rem]">
              <button
                type="button"
                onClick={() => setIsExpanded((expanded) => !expanded)}
                aria-expanded={isExpanded}
                aria-controls="professional-experience-list"
                className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              >
                {isExpanded
                  ? t('professionalExperience.showLess')
                  : t('professionalExperience.showMore', {
                      count: hiddenExperienceCount,
                    })}
                <ChevronDown
                  size={16}
                  aria-hidden="true"
                  className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          )}
        </>
      )}

      {selectedExperience && (
        <dialog
          ref={dialogRef}
          aria-labelledby="professional-experience-dialog-title"
          onClose={() => setSelectedExperienceId(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeExperienceDialog();
            }
          }}
          className="m-auto max-h-[min(90dvh,720px)] w-[calc(100vw-2rem)] max-w-2xl overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-950 p-0 text-zinc-100 shadow-2xl backdrop:bg-black/80"
        >
          <div className="relative p-6 sm:p-9">
            <button
              type="button"
              onClick={closeExperienceDialog}
              aria-label={t('professionalExperience.closeDetails')}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <p className="pr-12 text-sm font-medium uppercase tracking-wider text-emerald-300">
              {t(`professionalExperience.items.${selectedExperience.id}.period`)}
            </p>
            <h2
              id="professional-experience-dialog-title"
              className="mt-3 pr-10 text-2xl font-bold sm:text-3xl"
            >
              {t(`professionalExperience.items.${selectedExperience.id}.role`)}
            </h2>
            <p className="mt-2 text-zinc-300">
              {t(`professionalExperience.items.${selectedExperience.id}.company`)}
            </p>
            {t(`professionalExperience.items.${selectedExperience.id}.location`, {
              defaultValue: '',
            }) && (
              <p className="mt-1 text-sm text-zinc-400">
                {t(`professionalExperience.items.${selectedExperience.id}.location`, {
                  defaultValue: '',
                })}
              </p>
            )}
            <div className="my-6 h-px bg-zinc-800" />
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              {t('professionalExperience.detailsHeading')}
            </h3>
            <p className="whitespace-pre-line leading-relaxed text-zinc-300">
              {t(`professionalExperience.items.${selectedExperience.id}.description`)}
            </p>
          </div>
        </dialog>
      )}
    </section>
  );
}
