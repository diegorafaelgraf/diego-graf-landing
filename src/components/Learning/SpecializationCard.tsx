import { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';

import type { LearningItem } from '../../data/learning';

import CourseItem from './CourseItem';

interface SpecializationCardProps {
  item: LearningItem;
}

export default function SpecializationCard({
  item,
}: SpecializationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const courses = item.courses ?? [];

  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="group w-full p-8 text-left md:p-10"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-5">
          {/* Icon */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <BookOpen size={22} />
          </div>

          {/* Main content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="text-sm text-zinc-500">
                  {item.provider}
                </span>

                <h3 className="mt-2 text-xl font-bold md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Professional Certificate
                </p>
              </div>

              {/* Course count + arrow */}
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400">
                  {item.completedCourses} of {item.totalCourses}
                </span>

                <ChevronDown
                  size={20}
                  className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                    }`}
                />
              </div>
            </div>

            {/* Progress */}
            <div className="mt-8">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">
                  Overall progress
                </span>

                <span className="font-medium">
                  {item.progress}%
                </span>
              </div>

              <div className="mt-5 flex justify-end">
                <span className="text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300">
                  {isOpen ? 'Hide courses ↑' : `View ${courses.length} courses ↓`}
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </button>

      {/* Courses */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${isOpen
          ? 'grid-rows-[1fr]'
          : 'grid-rows-[0fr]'
          }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-zinc-800 px-8 pb-8 pt-2 md:px-10 md:pb-10">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 px-5">
              {courses.map((course) => (
                <CourseItem
                  key={course.title}
                  course={course}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}