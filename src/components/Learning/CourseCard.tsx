import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BookOpen,
  ExternalLink,
  X,
} from 'lucide-react';

import type { LearningItem } from '../../data/learning';

interface CourseCardProps {
  item: LearningItem;
}

export default function CourseCard({ item }: CourseCardProps) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <BookOpen size={22} />
          </div>

          <div className="min-w-0 flex-1">
            <span className="text-sm text-zinc-500">
              {item.provider}
            </span>

            <h3 className="mt-2 text-xl font-bold">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
              {t(`learning.items.${item.id}.description`)}
            </p>

            <button
              type="button"
              onClick={() => setIsDescriptionOpen(true)}
              className="mt-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Read more
            </button>

            {/* Progress */}
            <div className="mt-6">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">
                  Progress
                </span>

                <span>{item.progress}%</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all"
                  style={{
                    width: `${item.progress}%`,
                  }}
                />
              </div>
            </div>

            {/* Certificate */}
            {item.certificate && (
              <a
                href={item.certificate}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
              >
                View certificate
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Description modal */}
      {isDescriptionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={() => setIsDescriptionOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsDescriptionOpen(false)}
              className="absolute right-5 top-5 text-zinc-500 hover:text-white"
              aria-label="Close description"
            >
              <X size={20} />
            </button>

            <span className="text-sm text-zinc-500">
              {item.provider}
            </span>

            <h3 className="mt-2 pr-8 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-6 leading-7 text-zinc-400">
              {t(`learning.items.${item.id}.description`)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}