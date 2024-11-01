import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Age function
 */
export function getCurrentAge(year: number){
  const currentYear = new Date().getFullYear();
  return currentYear - year
}

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Rahul Singh',
  description: "The resume of Rahul Singh, your newest hire!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Rahul Singh`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Vancouver based <strong className="text-stone-100">Full Stack Software Engineer</strong> 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me 
        training in <strong className="text-stone-100">Bouldering</strong>,
        plucking my <strong className="text-stone-100">Guitar</strong>,
        or attempting to <strong className="text-stone-100">Snowboarding</strong>{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Software Quality Assurance Analyst with a background in DevOps, 
  Databases, and programming. Software development experience from the University 
  of British Columbia and the British Columbia Institute of Technology. Have 
  previously developed apps for sponsors and have implemented a software 
  pipeline with Jenkins and Microsoft Azure. `,
  aboutItems: [
    {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
    {label: 'Age', text: getCurrentAge(1994).toString(), Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian', Icon: FlagIcon},
    {label: 'Interests', text: 'Board Games, Bouldering, Reading', Icon: SparklesIcon},
    {label: 'Study', text: "University of British Columbia, \n British Columbia Institute of Technology", Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Cheerfully Looking', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Elantrian',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'HTML',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Django',
        level: 6,
      },
      {
        name: 'MySQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Data Analysis',
    skills: [
      {
        name: 'Power BI',
        level: 8,
      },
      {
        name: 'Microsoft Excel',
        level: 6,
      },
      {
        name: 'Machine Learning',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2022',
    location: 'British Columbia Institute of Technology',
    title: 'Diploma: Computer Information Technology',
    content: <p>A program focused on IT development with an emphasis on current techonologies and trends.</p>,
  },
  {
    date: 'April 2019',
    location: 'University of British Columbia',
    title: 'Bachelor\'s Degree: Cognitive Systems',
    content: <p>Multi-disciplinary program combining Computer Science, Linguistics, Philosophy, and Psychology with an emphasis on research.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Enkaur Productions',
    title: 'Digital Image Technician (Freelance)',
    content: (
      <p>
        Assisted lead editor in organizing hundreds of hours of footage. Managed video and audio 
        files for various projects, including TV Series, documentaries, and online content. Liaised 
        with department heads to ensure smooth delivery to platforms. 
      </p>
    ),
  },
  {
    date: 'January 2022 - June 2023',
    location: 'British Columbia Institute of Technology',
    title: 'Developer (Industry Projects)',
    content: (
      <p>
        Communicated with clients to gather project requirements, establish expectations,
        and discuss the scope of the project. Used technologies such as Git, Trello, 
        and Slack in order to manage the team and project. Built 5+ mock applications to 
        demonstrate potential solutions, and hosted projects on AWS and Azure.
      </p>
    ),
  },
  {
    date: 'May 2018 - May 2019',
    location: 'Centre for Gambling Research: Vancouver',
    title: 'Research Assistant (Volunteer)',
    content: (
      <p>
        Administered gambling research experiments to collect data on skin conductance
        and grip strength. Analyzed collected data across 20+ participants and 50+ sessions
        to answer research questions. Then submitted a oral and written report summarizing
        the results of the study. 
      </p>
    ),
  },
  {
    date: 'November 2012 - April 2015',
    location: 'Hewer Home Hardware: Vancouver',
    title: 'Stock Person',
    content: (
      <p>
        Communicated product knowledge for hundreds of items to customers. Collaborated 
        with customers to identify and solve their problems. Unloaded and recieved
        product from vendors 2+ times a week. Stored and stocked inventory for ease
        of purchase. 
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Give me a job! \n Just email me and let me know what I should learn and then pay me for it!',
  items: [
    {
      type: ContactType.Email,
      text: 'i.am.rahul@live.com',
      href: 'mailto:i.am.rahul@live.com',
    },
    {
      type: ContactType.Location,
      text: 'Vancouver BC, Canada',
      href: 'https://maps.app.goo.gl/m6iLuvKMtCVwC338A',
    },
    /*
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    **/
    {
      type: ContactType.Github,
      text: 'RaideMonde',
      href: 'https://github.com/RaideMonde',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/RaideMonde'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rahul-singh-van/'},
];
