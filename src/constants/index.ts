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
    title: "Smart Contract Auditor",
    icon: web,
  },
  {
    title: "Blockchain Security Researcher",
    icon: mobile,
  },
  {
    title: "DeFi Security Specialist",
    icon: backend,
  },
  {
    title: "Web3 Developer",
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
    title: "Smart Contract Security Auditor",
    company_name: "Sherlock Audit Competition (1st Place)",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "January 2026",
    points: [
      "Won 1st place and $700 prize in Sherlock audit competition for Allbridge Core Yield Protocol",
      "Identified critical vulnerabilities in DeFi protocol handling cross-chain asset transfers and yield optimization",
      "Performed comprehensive security analysis including reentrancy, access control, and economic attack vectors",
      "Delivered detailed vulnerability reports with proof-of-concepts and remediation recommendations",
    ],
  },
  {
    title: "Independent Security Auditor",
    company_name: "Blockchain Security Researcher",
    icon: backend,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Conducted smart contract audits for DeFi protocols, identifying vulnerabilities in Solidity codebases",
      "Performed static and dynamic analysis using Slither, Mythril, Echidna, and custom fuzzing frameworks",
      "Developed automated security analysis tools and property-based tests for protocol invariant verification",
      "Specialized in DeFi security including AMMs, lending protocols, and cross-chain bridge vulnerabilities",
    ],
  },
  {
    title: "Salesforce Developer Intern",
    company_name: "Salesforce",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Spearheaded development of decentralized applications (DApps) and smart contracts on Ethereum and Hyperledger",
      "Conducted comprehensive smart contract audits, identifying vulnerabilities and ensuring code integrity",
      "Implemented secure coding practices and vulnerability remediation strategies",
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
    name: "Advanced Fuzzing Framework",
    description:
      "Built comprehensive fuzzing infrastructure for property-based testing of DeFi protocol invariants with custom mutation strategies to discover edge cases in AMM and lending protocol logic.",
    tags: [
      { name: "solidity", color: "blue-text-gradient" },
      { name: "foundry", color: "green-text-gradient" },
      { name: "echidna", color: "pink-text-gradient" },
    ],
    image: project1,
    source_code_link: "https://github.com/MKVEERENDRA",
    live_site_link: "https://github.com/MKVEERENDRA",
  },
  {
    name: "DeFi Auditing Suite",
    description:
      "Automated vulnerability detection pipeline for DeFi smart contracts integrating static analysis, symbolic execution, and custom heuristics, achieving 95% accuracy.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "slither", color: "green-text-gradient" },
      { name: "mythril", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/MKVEERENDRA",
    live_site_link: "https://github.com/MKVEERENDRA",
  },
  {
    name: "NFT Marketplace Analysis",
    description:
      "Audited NFT marketplace contracts focusing on ownership transfer security and royalty mechanisms. Identified and remediated critical vulnerabilities with 100% code coverage.",
    tags: [
      { name: "solidity", color: "blue-text-gradient" },
      { name: "ethereum", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/MKVEERENDRA",
    live_site_link: "https://github.com/MKVEERENDRA",
  },
  {
    name: "Decentralized Crowdfunding",
    description:
      "Built a trustless crowdfunding platform with automated fund management and refund logic. Conducted security audit and formal verification of critical protocol invariants.",
    tags: [
      { name: "solidity", color: "blue-text-gradient" },
      { name: "truffle", color: "green-text-gradient" },
      { name: "auditing", color: "pink-text-gradient" },
    ],
    image: project5,
    source_code_link: "https://github.com/MKVEERENDRA",
    live_site_link: "https://github.com/MKVEERENDRA",
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
