// All content here is sourced directly from Harsith K's resume.
// Replace placeholder URLs (marked below) with your real links whenever you have them.

export const profile = {
  name: 'Harsith K',
  headline: 'Aspiring Software Developer · AI & Data Science Enthusiast',
  intro:
    "B.Tech Artificial Intelligence & Data Science student building real-world software with Python, Java and machine learning — from predictive models to data-driven applications. I learn fast, ship practical projects, and care about turning data into decisions.",
  email: 'harsithkumar36@gmail.com',
  phone: '+91 74490 76146',
  location: 'Kothagiri, Tamil Nadu',
  // TODO: replace with your real profile URLs
  linkedin: '#',
  github: '#',
  resumeFile: '/resume.pdf',
}

export const about = {
  paragraphs: [
    "I'm a B.Tech student in Artificial Intelligence & Data Science at Nandha Engineering College, Erode, currently maintaining a CGPA of 8.1/10. My interest lies in software development and applied AI — building things like prediction systems and data-driven tools rather than just studying the theory behind them.",
    "Through internships in machine learning and deep learning, plus independent projects in weather forecasting and smart farming, I've picked up practical experience across the ML workflow: data preprocessing, model selection, evaluation, and turning a working model into something usable.",
    "I'm a continuous learner who enjoys picking up new tools as needed — from Tableau for visualization to core web development — and I'm looking to contribute to a team building impactful, real-world technology solutions.",
  ],
  stats: [
    { k: 'degree', v: 'B.Tech AI & Data Science' },
    { k: 'institution', v: 'Nandha Engineering College' },
    { k: 'duration', v: '2023 – 2027' },
    { k: 'cgpa', v: '8.1 / 10' },
    { k: 'internships', v: '2 (ML, Deep Learning)' },
    { k: 'location', v: 'Kothagiri, Tamil Nadu' },
  ],
}

export const skillGroups = [
  {
    label: '// programming',
    skills: ['Python', 'Java (Basics)', 'HTML', 'CSS'],
    color: 'teal',
  },
  {
    label: '// ml & nlp',
    skills: ['Machine Learning', 'Regression', 'Classification', 'Sentiment Analysis'],
    color: 'indigo2',
  },
  {
    label: '// data analysis',
    skills: ['Pandas', 'NumPy', 'SQL', 'Tableau', 'Data Visualization'],
    color: 'coral',
  },
  {
    label: '// core concepts',
    skills: ['Database Concepts', 'Business Understanding'],
    color: 'violet',
  },
]

export const projects = [
  {
    title: 'Weather Forecasting System',
    problem: 'predicting weather conditions',
    description:
      'Developed a weather forecasting system that predicts weather conditions using historical and real-time meteorological data, applying machine learning techniques to model changing weather patterns.',
    features: [
      'Uses historical & real-time meteorological data',
      'Applies ML models to forecast conditions',
    ],
    tech: ['Python', 'Machine Learning', 'Regression'],
    icon: 'CloudSun',
    color: 'indigo2',
    github: null as string | null, // TODO: add repo URL
    demo: null as string | null, // TODO: add live demo URL
  },
  {
    title: 'AI-Enabled Smart Farming Support System',
    problem: 'supporting farmers with AI',
    description:
      'Developed an AI-enabled smart farming support system to assist farmers with crop recommendations, disease detection, and yield prediction using machine learning models.',
    features: [
      'Crop recommendation support',
      'Disease detection & yield prediction using ML',
    ],
    tech: ['Python', 'Machine Learning', 'Classification'],
    icon: 'Sprout',
    color: 'green2',
    github: null as string | null, // TODO: add repo URL
    demo: null as string | null, // TODO: add live demo URL
  },
]

export const experience = [
  {
    role: 'Machine Learning Intern',
    org: 'F5 Coders',
    description:
      'Gained hands-on exposure to the machine learning workflow — including data preprocessing, model selection, and evaluation of foundational algorithms such as regression and classification.',
    color: 'teal',
  },
  {
    role: 'Deep Learning Intern',
    org: 'Trios Technology',
    description:
      'Built foundational knowledge of neural networks and deep learning principles through practical, project-based learning.',
    color: 'violet',
  },
]

export const education = [
  {
    degree: 'Bachelor of Technology in Artificial Intelligence & Data Science',
    school: 'Nandha Engineering College, Erode, Tamil Nadu',
    duration: '2023 – 2027',
    score: 'CGPA: 8.1/10',
  },
  {
    degree: 'SVGV Matriculation Higher Secondary School',
    school: 'Coimbatore, Tamil Nadu',
    duration: '2021 – 2023',
    score: 'Percentage: 83%',
  },
]

export const certifications = [
  { name: 'Data Visualization', issuer: 'Tableau', icon: 'BarChart3', color: 'gold' },
  { name: 'Web Development', issuer: 'Cognifyz Technology', icon: 'Code2', color: 'indigo2' },
]

export const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
