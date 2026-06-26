import i18n from '../i18n';

const baseLearning = [
  {
    id: 'dockerKubernetes',
    provider: 'Coursera',
    progress: 40,
  },
  {
    id: 'modernReactPatterns',
    provider: 'Udemy',
    progress: 65,
  },
  {
    id: 'aiAgentsAutomation',
    provider: 'Self Learning',
    progress: 50,
  },
] as const;

export const learning = baseLearning.map((course) => ({
  ...course,
  title: i18n.t(`learning.items.${course.id}.title`, { defaultValue: course.id }),
  category: i18n.t(`learning.items.${course.id}.category`, { defaultValue: '' }),
}));