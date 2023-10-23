import menuify_img from '../assets/menuify_300x500.png'
import pawfect_img from '../assets/pawfect_300x500.png'
import rancid_img from '../assets/rancid_300x500.png'

const data = {
  homeSummary:
    'A passionate learner and hard worker with excellent results in the military, education, and private industry. I value honesty, deep connections, and achievement. I love collaborating, mentoring, and learning from others. Complex challenges excite me, and I work to purposefully improve products, processes, and the lives of others.',
  about:
    'A hard-working, team-player with success in the military, education, and private industry. Collaborating, mentoring, and learning from others drive my achievements. Honesty, deep connections, and achievement matter to me. I am a passionate learner, always seeking new skills and experiences. I eagerly research and practice to develop new skills. I thrive on complex challenges and take pride in overcoming obstacles. Excellence, integrity, and service guide me. My purpose is to enhance lives through improved products and processes. ',
  education: [
    {
      school: 'Turing School of Software and Design',
      location: 'Denver, CO',
      startDate: 'August 2022',
      endDate: 'March 2023',
      program: 'Front End Engineering Program',
    },
    {
      school: 'Bellevue University',
      location: 'Bellevue, NE',
      startDate: 'June 2005',
      endDate: 'June 2012',
      program:
        'Master of Business Adminstration in Computer Information Systems',
    },
    {
      school: 'Bellevue University',
      location: 'Bellevue, NE',
      startDate: 'August 2004',
      endDate: 'June 2005',
      program:
        'Bachelor of Science in Business Adminstration in Technical Studies',
    },
    {
      school: 'Community College of the Air Force',
      location: 'Maxwell AFB, LA',
      startDate: 'October 2001',
      endDate: 'March 2005',
      program:
        'Bachelor of Science in Business Adminstration of Technical Studies',
    },
  ],
  experience: [
    {
      role: 'Front End Engineering Student',
      employer: 'Turing School of Software and Design',
      location: 'Denver, CO',
      startDate: 'August 2022',
      endDate: 'March 2023',
      description:'   Excelled in an accredited, intense, 60-70 hr/wk, fully-remote, 1,700-hour software development training program through its collaborative, high-paced, curriculum to sharpen web development skills including pair-programming, algorithms, debugging, HTML,CSS, JavaScript, React, Node, Git, GitHub, and more.',
      bullets: [
        ' Collaborated with team using daily stand-ups, Figma wireframes, GitHub Projects, and Trello to stay organized, communicate remotely, and coordinate asynchronous workflows',
        'Wrote comprehensive E2E test packages with Cypress.io, Mocha, and Chai ',
        'Developed feature-rich web site with a Rails server, Python API, and mobile-first UI with React Redux ',
        'Implemented CircleCI for continuous integration testing and deployment on Vercel',
        'Self-taught a PostgreSQL, Knex and Express to create an application for dog breed research and selection',
        'Incorporated project managers & mentors feedback through ongoing code review',
      ],
    },
    {
      role: 'Teacher',
      employer: 'Multiple Schools',
      location: 'Cotopaxi, CO | Sterling, CO | Colorado Springs, CO | Herradura, Puntarenas, Costa Rica',
      startDate: 'August 2008',
      endDate: 'August 2022',
      description:'Taught grades 6-12 computer courses using the Adobe Creative Suite and Business education courses to high school students. Planned, coordinated and trained staff and students to complete high-profile video projects within tight timelines. Provided extensive technical support to colleagues with technical issues.',
      bullets: [
        ' Taught middle and high school computer courses (Coding, Android Mobile App, web design, CS fundamentals, computer applications, Adobe Photoshop, video editing, 3D modeling, etc.)',
        ' Lead 12-person department to design and implement educational solutions; hired, developed, and trained a positive, cohesive, cross-functional team from a passionate group of highly-diverse educators',
        'Planned, coordinated and trained to complete high-profile projects with tight timelines ',
      ],
    },
    {
      role: 'Insurance Agent',
      employer: 'California Casualty Insurance Co.',
      location: 'Colorado Springs, CO',
      startDate: 'April 2006',
      endDate: 'July 2008',
      description:'Provided front-line customer service, coverage counseling, and wrote new home and auto insurance policies in 27 different states; employed real-time, database applications and interfaced with other departments (underwriting, claims, business partners, etc) to assess risk and provide personalized coverage solutions.',
      bullets: [
        ' Provided front-line customer service for new policies; employed real-time, online database applications', 
        'Created promotional materials and constructed sales department web page on company intranet'
      ],
    },
    {
      role: 'Avionic Technician',
      employer: 'United States Air Force',
      location: 'Offutt AFB, NE | Holloman AB, NM',
      startDate: 'April 2006',
      endDate: 'July 2008',
      description: 'Performed component-level electronics testing, troubleshooting, maintenance and calibration of aircraft communication, navigation, and flight control systems. Managed the shop\'s hazardous materials compliance program.',
      bullets: [
        'Solved complex technical problems and performed component-level electronics testing, repair, maintenance and calibration using oscilloscopes, spectrum analyzers, automated test-equipment, and more',
        'Identified and published maintenance improvements on cooling systems, saving unit over $102,000'
      ],
    },
  ],
  certsAwards: [],
  projects: [
    {
      name: 'Menuify',
      description:
        'Menu application for restaurant owners to create beautiful, intuitive menus.',
      url: 'https://menu-ify.vercel.app/',
      img: menuify_img,
      gif: '',
    },
    {
      name: 'Pawfect Match',
      description:
        'Dog finder app for people to research breeds based on their lifestyle and preferences.',
      url: 'https://pawfect-match.vercel.app/',
      img: pawfect_img,
      gif: '',
    },
    {
      name: 'Rancid Tomatillos',
      description:
        'Movie collection application that allows users to browse and filter titles by rating.',
      url: 'https://rancid-tomatillos-lemon.vercel.app/',
      img: rancid_img,
      gif: '',
    },
  ],
}

export default data
