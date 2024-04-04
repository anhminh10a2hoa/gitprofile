const CONFIG = {
  github: {
    username: 'anhminh10a2hoa',
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'anhminh10a2hoa/IoT-typescript-client',
          'anhminh10a2hoa/microservice-demo',
          'anhminh10a2hoa/survey-application-deno',
          'anhminh10a2hoa/data-structures-and-algorithms-1',
          'anhminh10a2hoa/selling-mobile-website',
          'anhminh10a2hoa/natours-application',
        ],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Turn Up',
          description:
            'An app to help you find something to do in the city of Tampere e.g., when you are travelling for a business and have an evening to spend, or you are looking for something new or different to do',
          imageUrl:
            'https://anhminh10a2hoa.github.io/gitprofile/turnup-project.jpg',
        },
        {
          title: 'Rainportal for Map Visualization',
          description:
            'Online visualization platform of SkyEcho HD weather products and 3rd party data. It includes real-time rainfall visualization, archive mode visualization, on-the fly rainfall statistics and on-demand third party sensor integration',
          imageUrl:
            'https://anhminh10a2hoa.github.io/gitprofile/rainportal_project.png',
        },
        {
          title: 'REST Client for IoT-Ticket.com',
          description:
            'Typescript REST Client for IoT-Ticket.com of Wapice company',
          imageUrl:
            'https://anhminh10a2hoa.github.io/gitprofile/iot_ticket.jpg',
          link: 'https://github.com/anhminh10a2hoa/IoT-typescript-client',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Minh Hoang',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'minh-hoang-110510181',
    telegram: 'anhminh256',
    website: 'https://hoanganhminh.com',
    phone: '0406765729',
    email: 'anhminh10a2hoa@gmail.com',
  },
  resume: {
    fileUrl: 'https://anhminh10a2hoa.github.io/gitprofile/minh_hoang_cv.pdf',
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'React',
    'Node',
    'Vue',
    'AWS',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Java',
    'Spring',
    'Jest',
    'Docker',
    'Jenkins',
    'Scrum',
    'Software design',
  ],
  experiences: [
    {
      company: 'Cargotec Oyj',
      position: 'Software Engineer',
      from: 'May 2022',
      to: 'December 2023',
      companyLink: 'https://www.cargotec.com',
    },
    {
      company: 'Sofia Digital Oy',
      position: 'Software Developer',
      from: 'March 2021',
      to: 'May 2022',
      companyLink: 'https://sofiadigital.com',
    },
    {
      company: 'SkyEcho B.V.',
      position: 'Software Developer',
      from: 'April 2020',
      to: 'December 2020',
      companyLink: 'https://www.sky-echo.eu',
    },
  ],
  educations: [
    {
      institution: 'Tampere University',
      degree: 'MasterMaster of Science - MS, Software, Web & Cloud',
      from: 'August 2023',
      to: 'December 2024',
    },
    {
      institution: 'Vaasa University of Applied Sciences',
      degree: "Bachelor's degree, Information Technology",
      from: 'August 2018',
      to: 'May 2022',
    },
  ],
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  enablePWA: true,
};

export default CONFIG;
