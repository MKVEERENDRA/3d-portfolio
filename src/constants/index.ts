// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";
// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "resume",
    title: "Resume",
    link: "https://lime-careful-beetle-570.mypinata.cloud/ipfs/QmbwapSNPCTzsC4XhTkatAdMumgkAnZz2F1LcZrE7eBNin", // Your resume link
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "http://www.github.com/MKVEERENDRA/",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "3D Developer (Three.js)",
    icon: threejs,
  },
  {
    title: "Cybersecurity Analyst",
    icon: backend,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  
  {
    name: "AI/ML Frameworks",
    icon: backend,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js, Node.js, and other related technologies.",
      "Implementing blockchain solutions and smart contract auditing for decentralized applications.",
      "Creating 3D web experiences using Three.js to enhance user engagement.",
      "Conducting security analysis and implementing best practices to secure web applications.",
      "Collaborating with AI/ML teams to integrate machine learning models into web platforms.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Oct 2023",
    points: [
      "Developed cross-platform mobile applications using React Native.",
      "Worked closely with UX/UI teams to deliver responsive and intuitive interfaces.",
      "Participated in code reviews and optimized application performance.",
      "Integrated blockchain features for secure transactions and data handling.",
    ],
  },
  {
    title: "Blockchain Developer",
    company_name: "",
    icon: backend,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developed a decentralized NFT marketplace and crowdfunding platform.",
      "Ensured security and efficiency of smart contracts through thorough auditing.",
      "Collaborated with frontend teams to build secure, user-friendly DApps.",
    ],
  },
  {
    title: "Cybersecurity Analyst",
    company_name: "",

    icon: backend,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Analyzed security vulnerabilities and implemented cybersecurity protocols.",
      "Monitored systems for security breaches and responded to incidents.",
      "Worked with development teams to ensure secure coding practices.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Veerendra’s expertise in web development and blockchain technology is unmatched. They delivered a project beyond our expectations.",
    name: "Sara Lee",
    designation: "CFO",
    company: "transferNight",
    image: user1,
  },
  {
    testimonial:
      "I've worked with many developers, but Veerendra stands out for their deep knowledge and dedication to client success.",
    name: "Chris Brown",
    designation: "COO",
    company: "cryptos",
    image: user2,
  },
  {
    testimonial:
      "After Veerendra optimized our website and added advanced AI features, our user engagement soared. We couldn't be happier!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "NMVO",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "NFT Marketplace",
    description:
      "A decentralized platform enabling users to mint, buy, sell, and trade NFTs securely and efficiently on the blockchain.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "web3",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/MKVEERENDRA/purenfts",
    live_site_link: "https://purenfts.vercel.app/",
  },
  {
    name: "Crowdfunding Platform",
    description:
      "A secure decentralized crowdfunding platform for startups and creators to raise funds transparently with smart contracts.",
    tags: [
      {
        name: "blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "defi",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/MKVEERENDRA",
    live_site_link: "https://github.com/MKVEERENDRA/",
  },
  {
    name: "3D Portfolio Website",
    description:
      "A personal portfolio showcasing interactive 3D elements using Three.js, demonstrating skills in web and 3D development.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/MKVEERENDRA/",
    live_site_link: "https://github.com/MKVEERENDRA/",
  },
  {
    name: "Cybersecurity Dashboard",
    description:
      "A web-based cybersecurity dashboard that monitors threats, analyzes vulnerabilities, and provides real-time security insights.",
    tags: [
      {
        name: "security",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/MKVEERENDRA/",
    live_site_link: "https://github.com/MKVEERENDRA/",
  },
  {
    name: "AI-Powered Fitness App",
    description:
      "A web app that uses machine learning algorithms to suggest personalized workout plans based on user data and preferences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/MKVEERENDRA/",
    live_site_link: "https://github.com/MKVEERENDRA/",
  },
  {
    name: "Smart Contract Auditor",
    description:
      "Tool for auditing and analyzing smart contracts for security vulnerabilities and optimization opportunities.",
    tags: [
      {
        name: "solidity",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "audit",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/MKVEERENDRA/",
    live_site_link: "https://github.com/MKVEERENDRA/",
  },
] as const;

export const SOCIALS = [
  
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/veerendra-vamshi-821890225/",
  },

  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/MKVEERENDRA",
  },
] as const;
