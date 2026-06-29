import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaCss3Alt, FaHackerrank } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

export type ContactLink = {
  label: string;
  icon: IconType;
  href: string;
  target?: "_blank" | "_self";
  copyText: string;
};

export type Skills = Record<string, string[]>;

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
};

export type Project = {
  name: string;
  subtitle: string;
  period: string | null;
  type: string;
  bullets: string[];
  tech: string[];
  github: string | null;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
};

export type Certificate = ReactNode;

export type ResumeType = {
  name: string;
  title: string;
  summary: string;
  resumeLink: string;
  contactLinks: ContactLink[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  education: Education;
  certifications: Certificate[];
};

export const resume: ResumeType = {
  name: "Araf Ibrahim Khatri",
  title: "Software Development Engineer",
  summary:
    "Full-Stack Software Engineer with 2+ years of experience building scalable, production-grade web applications using React, Next.js, TypeScript, Python, and Node.js. Experienced in architecting end-to-end features across frontend, backend, databases, and AWS cloud infrastructure, including authentication systems, REST APIs, admin dashboards, and serverless applications.",
  resumeLink:
    "https://drive.google.com/file/d/13oT82rdKbekT9tEk6TRo28BW-hKpo2Tl/view",
  contactLinks: [
    {
      label: "arafkhatri0@gmail.com",
      icon: HiOutlineMail,
      href: "mailto:arafkhatri0@gmail.com",
      copyText: "arafkhatri0@gmail.com",
    },
    {
      label: "+91 7718982263",
      icon: HiOutlinePhone,
      href: "tel:+91 7718982263",
      copyText: "+91 7718982263",
    },
    {
      label: "LinkedIn",
      icon: AiOutlineLinkedin,
      href: "https://www.linkedin.com/in/araf-khatri-9819851b4",
      target: "_blank",
      copyText: "https://www.linkedin.com/in/araf-khatri-9819851b4",
    },
    {
      label: "GitHub",
      icon: AiOutlineGithub,
      href: "https://github.com/Araf-Khatri",
      target: "_blank",
      copyText: "https://github.com/Araf-Khatri",
    },
    {
      label: "HackerRank",
      icon: FaHackerrank,
      href: "https://www.hackerrank.com/profile/akplayz01",
      target: "_blank",
      copyText: "https://www.hackerrank.com/profile/akplayz01",
    },
    {
      label: "Leetcode",
      icon: SiLeetcode,
      href: "https://leetcode.com/Araf_k",
      target: "_blank",
      copyText: "https://leetcode.com/Araf_k",
    },
    {
      label: "CSS Battle",
      icon: FaCss3Alt,
      href: "https://cssbattle.dev/player/araf_k",
      target: "_blank",
      copyText: "https://cssbattle.dev/player/araf_k",
    },
  ],

  skills: {
    Development: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "Flask",
      "React",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Styled Components",
      "Bootstrap",
    ],
    Database: ["PostgreSQL", "MongoDB", "Redis", "AWS DynamoDB"],
    "AWS Services": [
      "S3",
      "Lambda Functions",
      "API Gateway",
      "Cognito",
      "AWS SES",
    ],
    Other: [
      "Docker",
      "DSA",
      "Google Calendar API",
      "REST APIs",
      "Micro Services",
      "JWT",
    ],
  },

  experience: [
    {
      role: "Full Stack Developer",
      company: "Mactores Cognition",
      location: "Mumbai - Remote",
      period: "Nov 2025 - Present",
      bullets: [
        "Architected and built a full-stack serverless auth platform using AWS Cognito, Lambda (Python), DynamoDB, and API Gateway — covering business signup, login, onboarding, and role-based user management across frontend and backend.",
        "Integrated a WebSocket into the Next.js AI chat interface, optimizing frontend data rendering for performance, and validated end-to-end behavior using k9s on a local Kubernetes cluster synced from AWS.",
        "Applied AI-assisted development, Test-Driven Development (TDD), and automated testing using Jest and Playwright to deliver high-quality features efficiently.",
      ],
      tech: [
        "NextJS",
        "React",
        "JavaScript",
        "TypeScript",
        "Python3",
        "AWS S3",
        "DynamoDB",
        "AWS Lambda",
        "AWS Cognito",
        "AWS SES",
        "Jest",
        "Playwright",
        "Claude code",
        "v0",
        "Lovable",
        "ChatGPT",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Amaha",
      location: "Mumbai - Hybrid",
      period: "Sep 2023 - Jun 2025",
      bullets: [
        "Developed 45% of the Admin Dashboard including Admin Auth and a full RBAC system built from scratch in React and TypeScript, supporting 15+ distinct admin roles with route and component-level access control.",
        "Designed and implemented the Admin Session Booking Module UI, enabling streamlined session booking for admins.",
        "Led frontend integration of POS payments in a 3-person squad (frontend, backend, product), reducing clinic billing errors for 200+ sessions/month.",
        "Integrated Google Calendar APIs to build a Calendar View in the Admin Dashboard, letting admins see providers’ availability and streamline single or multiple bookings, improving scheduling efficiency by 60%.",
        "Demonstrated interactive, production-ready frontend features to cross-functional teams, ensuring alignment with product goals.",
      ],
      tech: [
        "ReactJS",
        "TypeScript",
        "NextJS",
        "Javascript",
        "Google Calendar APIs",
        "Styled Components",
        "Bootstrap",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Amaha",
      location: "Mumbai - Remote",
      period: "Jun 2023 - Sep 2023",
      bullets: [
        "Revamped the Admin Dashboard from scratch using React and TypeScript.",
        "Developed scalable features and reusable components, reducing development time for future features by 75%.",
        "Collaborated with the CTO, UI/UX designers, and backend engineers to ensure timely and successful feature delivery.",
      ],
      tech: [
        "ReactJS",
        "TypeScript",
        "NextJS",
        "Javascript",
        "Styled Components",
        "Bootstrap",
        "Metronic8",
      ],
    },
  ],

  projects: [
    {
      name: "CitizenTubeInd",
      subtitle: "Metal & Steel Manufacturing Company",
      period: "Jan 2023",
      type: "Freelance Work",
      bullets: [
        "Built and delivered a full-stack website as a freelance project, driving increased client inquiries through improved online presence and direct contact features.",
        "Developed a responsive, client-side rendered frontend with React.js and Tailwind CSS, plus a backend with Node.js, Express, and Nodemailer for seamless email communication.",
        "Created reusable, dynamic components to enhance scalability and reduce future development effort by 55%.",
      ],
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "Nodemailer"],
      github: null,
    },
    {
      name: "Vistagram",
      subtitle: "Instagram Clone",
      period: null,
      type: "Personal Project",
      bullets: [
        "Implemented JWT-based Authentication and Authorization with signup/login flows, protected routes, and session management.",
        "Designed and implemented scalable PostgreSQL schemas with SQLAlchemy for efficient and maintainable relationships.",
        "Optimized pagination and resolved duplication issues using composite ordering, exploring Redis caching to enhance performance.",
      ],
      tech: [
        "Flask",
        "PostgreSQL",
        "Redis",
        "React",
        "Typescript",
        "Docker",
        "SQLAlchemy",
        "JWT",
        "Tailwind CSS",
      ],
      github: "https://github.com/Araf-Khatri/vistagram",
    },
    {
      name: "Natours.io",
      subtitle: "Tour Booking Web Application",
      period: null,
      type: "Personal Project",
      bullets: [
        "Built a RESTful API with CRUD operations, adhering to MVC Architecture for maintainability and scalability.",
        "Integrated payment processing with Stripe, enabling secure transactions for tour bookings.",
      ],
      tech: [
        "Node.js",
        "Express",
        "MVC",
        "Stripe",
        "Javascript",
        "PUG Template Engine",
        "SSR",
      ],
      github: "https://github.com/Araf-Khatri/Natours",
    },
  ],

  education: {
    degree: "B.Sc. in Information Technology (BSc. IT)",
    institution: "University of Mumbai",
    period: "Jun 2021 - Apr 2024",
    cgpa: "8",
  },

  certifications: [
    "CSS-Battle Rank: Top 700 / 370k+ users",
    "Solved 250+ problems on Leetcode",
    <span className="cert-item">
      HackerRank Certificates:{" "}
      <a
        target="_blank"
        href="https://www.hackerrank.com/certificates/iframe/e7f0792cf3dd"
      >
        Python (Basic)
      </a>
      ,{" "}
      <a
        target="_blank"
        href="https://www.hackerrank.com/certificates/iframe/c767620ffe92"
      >
        Problem Solving (Basic)
      </a>
      , &{" "}
      <a
        target="_blank"
        href="https://www.hackerrank.com/certificates/iframe/0e37077e41ab"
      >
        SQL (Intermediate)
      </a>
    </span>,
    <span className="cert-item">
      Completed Udemy courses in Python, HTML5, CSS3, JavaScript, MERN Stack ,
      and{" "}
      <a
        href="https://www.udemy.com/certificate/UC-8823f7c4-f879-4d7d-a26e-37529156a1e9"
        target="_blank"
        rel="noopener noreferrer"
      >
        AWS Developer Associate
      </a>{" "}
      preparation.
    </span>,
  ],
};
