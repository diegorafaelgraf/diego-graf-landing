// import i18n from '../i18n';

export const baseProjects = [
  {
    id: 'studyTracker',
    progress: 80,
    technologies: ['React', 'Typescript', 'React Query', 'React Router', 'CSS Modules', 'Vite', 'Nest.js', 'MongoDB', 'Mongoose', 'JWT Authentication', 'Docker', 'Docker Compose'],
    github: 'https://github.com/diegorafaelgraf/study-tracker',
    demo: '',
  },
  {
    id: 'carMaintenance',
    progress: 10,
    technologies: ['React Native', 'Expo'],
    github: '',
    demo: '',
  },
  {
    id: 'pfComparer',
    progress: 35,
    technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB'],
    github: '',
    demo: '',
  },
] as const;

// export const projects = baseProjects.map((project) => ({
//   ...project,
//   title: i18n.t(`projects.items.${project.id}.title`, { defaultValue: project.id }),
//   description: i18n.t(`projects.items.${project.id}.description`, { defaultValue: '' }),
//   status: i18n.t(`projects.items.${project.id}.status`, { defaultValue: '' }),
// }));