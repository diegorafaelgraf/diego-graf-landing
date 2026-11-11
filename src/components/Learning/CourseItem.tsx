import { useEffect, useRef, useState } from 'react';
import { AlertCircle, Check, Circle, Clock, ExternalLink, Eye, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { LearningCourse } from '../../data/learning';

interface CourseItemProps {
  course: LearningCourse;
}

export default function CourseItem({ course }: CourseItemProps) {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isCompleted = course.status === 'completed';
  const isInProgress = course.status === 'in-progress';
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [isCertificateLoading, setIsCertificateLoading] = useState(false);
  const [hasCertificateError, setHasCertificateError] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isCertificateOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isCertificateOpen && dialog.open) {
      dialog.close();
    }
  }, [isCertificateOpen]);

  useEffect(() => {
    if (!isCertificateOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCertificateOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCertificateOpen]);

  const handleOpenCertificate = async () => {
    if (!course.certificate) {
      return;
    }

    setHasCertificateError(false);
    setIsCertificateLoading(true);
    setIsCertificateOpen(true);

    try {
      const response = await fetch(course.certificate, { method: 'HEAD' });
      const contentType = response.headers.get('content-type')?.toLowerCase() ?? '';
      const isPdf = contentType.includes('application/pdf') || contentType.includes('application/octet-stream');
      setHasCertificateError(!response.ok || !isPdf);
    } catch {
      setHasCertificateError(true);
    } finally {
      setIsCertificateLoading(false);
    }
  };

  return (
    <div className="flex gap-4 border-t border-zinc-800 py-5">
      <div className="mt-1 shrink-0">
        {isCompleted ? (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/15 text-green-400">
            <Check size={16} />
          </div>
        ) : isInProgress ? (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
            <Clock size={16} />
          </div>
        ) : (
          <div className="flex h-7 w-7 items-center justify-center text-zinc-600">
            <Circle size={18} />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="font-medium text-zinc-200">
          {course.title}
        </h4>

        <div className="mt-2 flex items-center gap-3 text-sm text-zinc-500">
          {isCompleted && <span>{t('learning.completed')}</span>}

          {isInProgress && (
            <>
              <span>{t('learning.inProgress')}</span>
              <span>•</span>
              <span>{course.progress}%</span>
            </>
          )}

          {course.status === 'not-started' && (
            <span>{t('learning.notStarted')}</span>
          )}
        </div>

        {isInProgress && (
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full rounded-full bg-blue-500 transition-all"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={() => setIsDescriptionOpen(true)}
            className="text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            {t('learning.readMore')}
          </button>

          {isCompleted && course.certificate && (
            <>
              <button
                type="button"
                onClick={handleOpenCertificate}
                className="inline-flex items-center gap-2 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
              >
                {t('learning.certificate.view')}
                <Eye size={14} aria-hidden="true" />
              </button>

            <dialog
              ref={dialogRef}
              aria-labelledby="certificate-dialog-title"
              onClose={() => setIsCertificateOpen(false)}
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  setIsCertificateOpen(false);
                }
              }}
              className="m-auto h-[min(92dvh,900px)] w-[calc(100vw-1rem)] max-w-5xl overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-0 text-zinc-100 shadow-2xl backdrop:bg-black/80 sm:w-[calc(100vw-2rem)]"
            >
              <div className="flex h-full min-h-0 flex-col">
                <div className="flex shrink-0 items-center justify-between gap-3 border-b border-zinc-800 px-4 py-3 sm:px-6">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase text-zinc-500">
                      {t('learning.certificate.preview')}
                    </p>
                    <h2 id="certificate-dialog-title" className="truncate text-sm font-semibold text-zinc-100 sm:text-base">
                      {course.title}
                    </h2>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {!isCertificateLoading && !hasCertificateError && (
                      <a
                        href={course.certificate}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                      >
                        <span className="hidden sm:inline">{t('learning.certificate.open')}</span>
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setIsCertificateOpen(false)}
                      aria-label={t('learning.certificate.close')}
                      className="flex h-10 w-10 items-center justify-center rounded-md text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
                    >
                      <X size={20} aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="min-h-0 flex-1 bg-zinc-900">
                  {isCertificateLoading ? (
                    <div className="flex h-full items-center justify-center px-6 text-sm text-zinc-400">
                      {t('learning.certificate.loading')}
                    </div>
                  ) : hasCertificateError ? (
                    <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                      <AlertCircle size={28} className="text-zinc-500" aria-hidden="true" />
                      <h3 className="font-medium text-zinc-200">
                        {t('learning.certificate.unavailable')}
                      </h3>
                      <p className="max-w-md text-sm text-zinc-400">
                        {t('learning.certificate.unavailableDescription')}
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={course.certificate}
                      title={t('learning.certificate.frameTitle', { title: course.title })}
                      className="h-full w-full border-0 bg-white"
                    />
                  )}
                </div>
              </div>
            </dialog>
            </>
          )}
        </div>
      </div>

      {isDescriptionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={() => setIsDescriptionOpen(false)}
        >
          <div
            className="modal-scrollbar relative max-h-[calc(100dvh-3rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`course-description-title-${course.id}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsDescriptionOpen(false)}
              className="absolute right-5 top-5 text-zinc-500 hover:text-white"
              aria-label={t('learning.closeDescription')}
            >
              <X size={20} />
            </button>

            <h3
              id={`course-description-title-${course.id}`}
              className="pr-8 text-2xl font-bold"
            >
              {course.title}
            </h3>

            <p className="mt-6 whitespace-pre-line leading-7 text-zinc-400">
              {t(`learning.courses.${course.id}.description`)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}