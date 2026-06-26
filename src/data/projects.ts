import i18n from '../i18n';

const baseProjects = [
  {
    id: 'studyTracker',
    progress: 80,
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/...',
    demo: '',
  },
  {
    id: 'carMaintenance',
    progress: 10,
    technologies: ['React'],
    github: '',
    demo: '',
  },
  {
    id: 'pfComparer',
    progress: 35,
    technologies: ['ReactNative', 'Expo', 'Node.js', 'MongoDB'],
    github: '',
    demo: '',
  },
] as const;

export const projects = baseProjects.map((project) => ({
  ...project,
  title: i18n.t(`projects.items.${project.id}.title`, { defaultValue: project.id }),
  description: i18n.t(`projects.items.${project.id}.description`, { defaultValue: '' }),
  status: i18n.t(`projects.items.${project.id}.status`, { defaultValue: '' }),
}));