// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Pranav',
    title: 'Economics with Data Science | Student',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'I am an undergraduate student of Economics and Data Science with a strong interest in applying economic theory and data analysis to real-world problems. My background spans economics, finance, and quantitative methods, with experience in research, analytics, and data visualization. I focus on turning complex data and economic concepts into clear insights that support better decision-making.\n' +
      '\n' +
      'Currently pursuing Economics and Data Science, my interests center on data analytics, applied economics, and quantitative problem-solving. I build end-to-end data solutions—cleaning, analyzing, and visualizing data—to translate complex datasets into actionable insights for decision-making.\n' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Data Analyst | Economics Student | Problem Solver',
    location: 'Bangalore, India',
  },

  seo: {
    title: 'Pranav – Student',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Researcher', 'Quant Analysis', 'Development Econ', 'Models'],

  animatedText: ['Your Role', 'Your Focus', 'Your Interest', 'Builder'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Your Blog Title',
      url: getAsset('static_page/project_management_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'CHRIST University',
      degree: 'BSc Economics with Data Science',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['My work centers on translating economic theory into practical frameworks for understanding real-world decisions. By combining analytical tools with empirical insight, I aim to examine how individuals and institutions respond to incentives, trade-offs, and constraints.'],
    },
    {
      institution: 'MES International School',
      degree: 'Class 12 (Commerce with Mathematics)',
      year: '2023–2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['In Class XII, I concentrated on Economics, Accountancy, Business Studies, and Mathematics, developing skills in economic analysis, financial accounting, business fundamentals, and mathematical reasoning.'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Your Certificate or Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Data Analyst Intern',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'FLEKT by KIRIX',
      time: '(DEC 2025 – Present)',
      desp: ['Analyzed and transformed raw datasets to generate insights, develop dashboards, and support data-driven decision-making.'],
    },
  ],



  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
