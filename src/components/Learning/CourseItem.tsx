import { Check, Circle, Clock, ExternalLink } from 'lucide-react';
import type { LearningCourse } from '../../data/learning';

interface CourseItemProps {
  course: LearningCourse;
}

export default function CourseItem({ course }: CourseItemProps) {
  const isCompleted = course.status === 'completed';
  const isInProgress = course.status === 'in-progress';

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
          {isCompleted && <span>Completed</span>}

          {isInProgress && (
            <>
              <span>In progress</span>
              <span>•</span>
              <span>{course.progress}%</span>
            </>
          )}

          {course.status === 'not-started' && (
            <span>Not started</span>
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

        {isCompleted && course.certificate && (
          <a
            href={course.certificate}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
          >
            View certificate
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}