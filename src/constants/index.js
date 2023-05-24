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
  nodejs,
  mongodb,
  git,
  csharp,
  azure,
  dotnet,
  cbna,
  aiimage,
  piratepanic,
  blog,
  wiland,
  python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const introductionText =
  "My career as a full stack web and desktop application developer started as a hobby creating personal console applications, websites, and video games. As my passion and enthusiasm for development grew, I earned my first professional Junior Developer role in 2020. Since then I've worked with multiple front-end technologies, back-end technologies, databases, even cloud services-- many of which I had to learn quickly on the job. I was an integral part of agile-based teams that successfully released multiple employee and customer facing applications. It's my dedication and enthusiasm for development that drives me to continue to learn the latest technologies and deliver the highest quality products.";

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Database Developer",
    icon: backend,
  },
  {
    title: "Cloud Developer",
    icon: creator,
  },
];

const technologies = [
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
    name: "C#",
    icon: csharp,
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
    name: "Dot Net",
    icon: dotnet,
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
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Azure",
    icon: azure,
  },
];

const experiences = [
  {
    title: "Web Application Developer",
    company_name: "Wiland | Niwot, CO",
    icon: wiland,
    iconBg: "#383E56",
    date: "April 2022 - February 2023",
    points: [
      "Lead development of an employee-facing internal application using Vue, HTML, and CSS to successfully launch the Wiland View data product offerings for new and existing clients",
      "Developed multiple Service Oriented Architecture API endpoints used across multiple employee-facing applications using Node.js and TypeScript while utilizing complex SQL queries spanning multiple schema and tables.",
      "Managed tasks, requirements, and deadlines in a cross-department agile team utilizing weekly stand ups and Jira for story tracking.",
      "Developed various software features using Gitlab as a means of source control, code review, and deployment.",
    ],
  },
  {
    title: "Application Developer / Junior Application Developer",
    company_name: "Community Bank, N.A. | Syracuse, NY",
    icon: cbna,
    iconBg: "#E6DEDD",
    date: "August 2020 - March 2022",
    points: [
      "Operated within an Agile development cycle to create multiple customer and business facing web and desktop applications leveraging .NET, C#, WPF, WinForms, Node.js, React, SQL Server, MongoDB, and Azure.",
      "Contributed heavily toward building a customer-facing online portal leveraging ASP.NET MVC, Razor pages, Azure Blob storage, Azure B2C Authentication, SQL Server, and Docusign API in the span of 6 weeks to save the organization ~$1 million in legal fees and munal labor.",
      "Leveraged third party APIs including Docusign (REST), Visa (REST), and jXchange (SOAP).",
      "Mentored and assisted junior/less experienced team members and participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "AI Image Generator",
    description:
      "Features a React front-end and a Node.js/Express back-end, and integration with Open AI and Cloudinary APIs. Create a prompt, generate an image, share it with other users, and download your favorites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aiimage,
    live_url: "https://chimerical-rolypoly-3d8659.netlify.app/",
    source_code_link: "https://github.com/dotis90/ai-image-generator",
  },
  {
    name: "Pygame Pirate Game",
    description:
      "A 2D Platformer made entirely in python. Avoid hazards, jump on enemies, collect coins, and make it through all six levels.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
    ],
    image: piratepanic,
    live_url: "https://dotis.itch.io/pirate-panic",
    source_code_link: "https://github.com/dotis90/pirate-panic",
  },
  {
    name: "Gatsby Blog",
    description:
      "Made with Gatsby and styled with Sass. Create new articles with ease using Markdown. Features incredibly fast client-side dynamic page rendering.",
    tags: [
      {
        name: "gatsby",
        color: "blue-text-gradient",
      },
      {
        name: "markdown",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    live_url: "https://nifty-panini-992868.netlify.app/",
    source_code_link: "https://github.com/dotis90/blog",
  },
];

export { services, introductionText, technologies, experiences, projects };
