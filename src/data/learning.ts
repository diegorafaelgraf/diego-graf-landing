import i18n from '../i18n';

export interface LearningCourse {
  title?: string;
  description?: string;
  status: 'not-started' | 'in-progress' | 'completed';
  progress: number;
  certificate?: string;
}

export interface LearningItem {
  type: 'specialization' | 'course';
  id: string;
  title?: string;
  description?: string;
  provider: string;
  progress: number;
  certificate?: string;
  // Used for specializations
  completedCourses?: number;
  totalCourses?: number;
  courses?: LearningCourse[];
}

const learning: LearningItem[] = [
  {
    type: 'specialization',
    id: 'googleDataAnalytics',
    provider: 'Google · Coursera',
    progress: 16,
    completedCourses: 1,
    totalCourses: 9,
    courses: [
      {
        status: 'completed',
        progress: 100,
        certificate: '/certificates/google-foundations.pdf',
      },
      {
        status: 'in-progress',
        progress: 43,
      },
      {
        status: 'not-started',
        progress: 0,
      },
      {
        status: 'not-started',
        progress: 0,
      },
      {
        status: 'not-started',
        progress: 0,
      },
      {
        status: 'not-started',
        progress: 0,
      },
      {
        status: 'not-started',
        progress: 0,
      },
      {
        status: 'not-started',
        progress: 0,
      },
      {
        status: 'not-started',
        progress: 0,
      },
    ],
  },
  {
    type: 'course',
    id: 'playwrightPowerTechniques',
    provider: 'Coursera',
    progress: 14
  },
  {
    type: 'course',
    id: 'supervisedMachineLearning',
    provider: 'DeepLearning.AI · Coursera',
    progress: 7
  },
  {
    type: 'course',
    id: 'claude101',
    provider: 'Claude Academy',
    progress: 7
  },
];

export const learnings = learning.map((item) => ({
  ...item,
  title: i18n.t(`learning.items.${item.id}.title`, { defaultValue: item.id }),
  description: i18n.t(`learning.items.${item.id}.description`, { defaultValue: '' }),
}));