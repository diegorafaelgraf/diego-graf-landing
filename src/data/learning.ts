import i18n from '../i18n';

export interface LearningCourse {
  id: string;
  title?: string;
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
  // Specializations //
  // Google Data Analytics Specialization
  {
    type: 'specialization',
    id: 'googleDataAnalytics',
    title: 'Google Data Analytics',
    provider: 'Google · Coursera',
    progress: 22,
    completedCourses: 2,
    totalCourses: 9,
    courses: [
      {
        id: 'foundationsDataEverywhere',
        title: 'Foundations: Data, Data, Everywhere',
        status: 'completed',
        progress: 100,
        certificate: '/certificates/Coursera_Foundations_Data_Data_Everywhere.pdf',
      },
      {
        id: 'askQuestionsDataDriven',
        title: 'Ask Questions to Make Data-Driven Decisions',
        status: 'completed',
        progress: 100,
        certificate: '/certificates/Coursera_Ask_Questions_to_Make_Data-Driven_Decisions.pdf',
      },
      {
        id: 'prepareDataExploration',
        title: 'Prepare Data for Exploration',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'processDataDirtyClean',
        title: 'Process Data from Dirty to Clean',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'analyzeDataAnswerQuestions',
        title: 'Analyze Data to Answer Questions',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'shareDataVisualization',
        title: 'Share Data Through the Art of Visualization',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'introDataAnalysisPython',
        title: 'Introduction to Data Analysis Using Python',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'googleDataAnalyticsCapstone',
        title: 'Google Data Analytics Capstone: Complete a Case Study',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'accelerateJobSearchAI',
        title: 'Accelerate Your Job Search with AI',
        status: 'not-started',
        progress: 0,
      },
    ],
  },
  // Secure Coding for Application Development Specialization
  {
    type: 'specialization',
    id: 'secureCodingForApplicationDevelopment',
    title: 'Secure Coding for Application Development',
    provider: 'edureka! · Coursera',
    progress: 15,
    completedCourses: 0,
    totalCourses: 3,
    courses: [
      {
        id: 'secureCodingSSDLC',
        title: 'Secure Coding and SSDLC for Developers',
        status: 'in-progress',
        progress: 45,
      },
      {
        id: 'owaspWebApplicationSecurity',
        title: 'OWASP Web Application Security',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'staticCodeAnalysisSonar',
        title: 'Static Code Analysis with SonarQube and SonarLint',
        status: 'not-started',
        progress: 0,
      }
    ],
  },
  // Java Programming and Software Engineering Fundamentals Specialization
  {
    type: 'specialization',
    id: 'fundamentosDeProgramacionJavaEIngenieriaDeSoftware',
    title: 'Java Programming and Software Engineering Fundamentals.',
    provider: 'Duke University · Coursera',
    progress: 1,
    completedCourses: 0,
    totalCourses: 5,
    courses: [
      {
        id: 'fundamentosProgramaciónJavaScriptHTMLCSS',
        title: 'Programming Foundations with JavaScript, HTML and CSS.',
        status: 'in-progress',
        progress: 5,
      },
      {
        id: 'programacionJavaResolucionProblemasSoftware',
        title: 'Java Programming: Solving Problems with Software.',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'programacionJavaMatricesListasDatosEstructurados',
        title: 'Java Programming: Arrays, Lists, and Structured Data.',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'programacionJavaPrincipiosDiseñoSoftware',
        title: 'Java Programming: Principles of Software Design.',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'programacionJavaConstruirSistemaRecomendacion',
        title: 'Java Programming: Build a Recommendation System.',
        status: 'not-started',
        progress: 0,
      }
    ],
  },
  // Python for Everybody Specialization
  {
    type: 'specialization',
    id: 'pythonForEverybodySpecialization',
    title: 'Python for Everybody',
    provider: 'University of Michigan · Coursera',
    progress: 1,
    completedCourses: 0,
    totalCourses: 5,
    courses: [
      {
        id: 'programmingForEverybodyGettingStartedWithPython',
        title: 'Programming for Everybody (Getting Started with Python)',
        status: 'in-progress',
        progress: 15,
      },
      {
        id: 'pythonDataStructures',
        title: 'Python Data Structures',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'usingPythonToAccessWebData',
        title: 'Using Python to Access Web Data',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'usingDatabasesWithPython',
        title: 'Using Databases with Python',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'capstoneProjectUsingPythonToAccessWebData',
        title: 'Capstone: Retrieving, Processing, and Visualizing Data with Python',
        status: 'not-started',
        progress: 0,
      }
    ],
  },
  // Cyber Security: DevOps (Specialization) 
  {
    type: 'specialization',
    id: 'cyberSecurityDevOpsSpecialization',
    title: 'Cyber Security: DevOps',
    provider: 'Macquarie University · Coursera',
    progress: 0,
    completedCourses: 0,
    totalCourses: 3,
    courses: [
      {
        id: 'ciberSecurityAppliedCryptography',
        title: 'Cyber Security: Applied Cryptography',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'ciberSecurityDevSecOps',
        title: 'Cyber Security: DevSecOps',
        status: 'not-started',
        progress: 0,
      },
      {
        id: 'ciberSecuritySecurityOfAI',
        title: 'Cyber Security: Security of AI',
        status: 'not-started',
        progress: 0,
      }
    ],
  },
  // Open English
  {
    type: 'specialization',
    id: 'openEnglish',
    title: 'Open English',
    provider: 'Open English',
    progress: 20,
    completedCourses: 1,
    totalCourses: 10,
    courses: [
      {
        id: 'level1',
        title: 'Open English Level 1',
        status: 'completed',
        progress: 100,
        certificate: '/certificates/OpenEnglish_Level1.pdf',
      },
      {
        id: 'level2',
        title: 'Open English Level 2',
        status: 'in-progress',
        progress: 97        
      },
      {
        id: 'level3',
        title: 'Open English Level 3',
        status: 'not-started',
        progress: 0
      },
      {
        id: 'level4',
        title: 'Open English Level 4',
        status: 'not-started',
        progress: 0
      },
      {
        id: 'level5',
        title: 'Open English Level 5',
        status: 'not-started',
        progress: 0
      },
      {
        id: 'level6',
        title: 'Open English Level 6',
        status: 'not-started',
        progress: 0
      },
      {
        id: 'level7',
        title: 'Open English Level 7',
        status: 'not-started',
        progress: 0
      },
      {
        id: 'level8',
        title: 'Open English Level 8',
        status: 'not-started',
        progress: 0
      },
      {
        id: 'level9',
        title: 'Open English Level 9',
        status: 'not-started',
        progress: 0
      },
      {
        id: 'level10',
        title: 'Open English Level 10',
        status: 'not-started',
        progress: 0
      }
    ],
  },
  // Individual courses //
  // Playwright Power Techniques: Fast and Reliable Web Testing
  {
    type: 'course',
    id: 'playwrightPowerTechniques',
    provider: 'Coursera',
    progress: 14
  },
  // Supervised Machine Learning: Regression and Classification
  {
    type: 'course',
    id: 'supervisedMachineLearning',
    provider: 'DeepLearning.AI · Coursera',
    progress: 7
  },
  // Claude 101
  {
    type: 'course',
    id: 'claude101',
    provider: 'Claude Academy',
    progress: 7
  },
];

export const learnings = learning.map((item) => ({
  ...item,
  title: i18n.t(`learning.items.${item.id}.title`, { defaultValue: item.title ?? item.id }),
  description: i18n.t(`learning.items.${item.id}.description`, { defaultValue: '' }),
}));