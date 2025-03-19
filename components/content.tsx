import {
  BookOpenIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  LineChartIcon,
  PaletteIcon,
  ServerIcon,
  TerminalIcon,
} from "lucide-react";

const content = {
  name: "David Munjishvili",
  "job-title": "Software Engineer",
  headline:
    "Creating beautiful, functional, and user-friendly digital experiences with modern web technologies. Specialized in React, Node.js, and full-stack development.",
  github: "https://github.com/DavitMunjishvili",
  linkedin: "https://www.linkedin.com/in/davidmunjishvili",
  twitter: "https://x.com/d_munjishvili",
  email: "munjishvili@proton.me",
  phone: "+995591080888",
  location: "Tbilisi, Georgia",
  "about-me": {
    title: "Software Engineer with a Passion for Innovation",
    detailed:
      "I'm a software engineer based in Tbilisi, Georgia, with a passion for programming that ignited at the age of 12. My journey began with competitive programming, where I mastered essential algorithms and honed my problem-solving skills.\nOver time, my focus shifted towards web development, and I've built expertise in both frontend and backend technologies. I've worked with startups and established companies across various industries, helping them solve complex problems and deliver exceptional digital experiences.\nMy approach combines technical expertise with a deep understanding of user needs. I'm excited to apply my diverse skills and knowledge to create innovative solutions in the software engineering world.",
  },
  "technical-expertise": [
    {
      category: "Frontend",
      icon: <CodeIcon className="w-6 h-6" />,
      technologies: [
        "React",
        "Vue",
        "Tailwind CSS",
        "Storybook",
        "Jest",
        "Shadcn",
      ],
    },
    {
      category: "Backend",
      icon: <ServerIcon className="w-6 h-6" />,
      technologies: [
        "Node.js",
        "Express",
        "Go",
        "PostgreSQL",
        "Flask",
        "Laravel",
      ],
    },
    {
      category: "Frameworks",
      icon: <DatabaseIcon className="w-6 h-6" />,
      technologies: [
        "Next.js",
        "Nuxt",
        "Remix",
        "Solid.js",
        "Laravel",
        "Web Components",
      ],
    },
    {
      category: "DevOps",
      icon: <CloudIcon className="w-6 h-6" />,
      technologies: [
        "AWS",
        "CI/CD",
        "Cloud Services",
        "Deployment Strategies",
        "Performance Optimization",
      ],
    },
    {
      category: "Design",
      icon: <PaletteIcon className="w-6 h-6" />,
      technologies: [
        "UI/UX Principles",
        "Component Libraries",
        "Design Systems",
        "Responsive Design",
        "Accessibility",
      ],
    },
    {
      category: "Tools",
      icon: <TerminalIcon className="w-6 h-6" />,
      technologies: ["Git", "ESLint", "Neovim", "Chart.js", "Redux"],
    },
    {
      category: "Additional",
      icon: <BookOpenIcon className="w-6 h-6" />,
      technologies: [
        "Data Science Fundamentals",
        "AI/Machine Learning",
        "Agile Methodologies",
        "Operating Systems",
      ],
    },
    {
      category: "Languages",
      icon: <LineChartIcon className="w-6 h-6" />,
      technologies: ["JavaScript", "TypeScript", "Python", "PHP", "Go", "SQL"],
    },
  ],
  experience: [
    {
      colors: {
        bg: "bg-blue-600",
        border: "border-blue-600",
      },
      title: "Software Engineer",
      company: "Pulsar AI / Impel",
      period: "Jul 2024 - Present",
      description:
        "Back at Impel with higher responsibilities. Taking care of the build process, old code maintenance and improving software performance. Working on CMS front-end with litjs, and designing the database with mock back-end. Technologies: React, web-components, Go, PostgreSQL.",
    },
    {
      colors: {
        bg: "bg-purple-600",
        border: "border-purple-600",
      },
      title: "Software Engineer (Contractor)",
      company: "T-NET",
      period: "Jan 2024 - Apr 2024",
      description:
        "Played a key role in developing a Micro Frontend (MFE) for a new assessment project. Optimized the performance and customizability of the UI library, creating a component library from scratch. Technologies: TypeScript, React, Tailwind CSS, Storybook, ESLint, shadcn.",
    },
    {
      colors: {
        bg: "bg-blue-400",
        border: "border-blue-400",
      },
      title: "Full Stack Developer (Contractor)",
      company: "Everse",
      period: "Oct 2022 - Jul 2024",
      description:
        "Worked on Rupert, an Israel-based startup that helps users create custom, data-driven alerts using a no-code alert builder. Used a mix of React and Vue to create optimized user interfaces. Also contributed to Cymulate, a cybersecurity company, building optimized, high-speed products. Technologies: TypeScript, React, Vue, Tailwind CSS, Chart.js, Chakra UI, Storybook, ESLint, Jest.",
    },
    {
      colors: {
        bg: "bg-green-400",
        border: "border-green-400",
      },
      title: "Middle Full Stack Developer",
      company: "Pulsar AI / Impel",
      period: "Feb 2022 - Oct 2022",
      description:
        "Worked on the dashboard for car dealerships and internal tools at Impel, a US-based company that allows dealerships to capture their cars in 360° views and offers AI virtual assistants. Technologies: React, Redux, Material UI, ESLint, Prettier, Python, Flask, Node.js, Express, Socket.io, AWS.",
    },
    {
      colors: {
        bg: "bg-yellow-400",
        border: "border-yellow-400",
      },
      title: "Freelancer",
      company: "Self-employed",
      period: "2021 - Present",
      description:
        "Started freelancing after learning Laravel, handling tasks from simple scripts to full-stack projects. Worked with clients including Glovo Georgia, Lenovo Georgia, and many local startups. Technologies: React, Vue, Remix, Nuxt, Next.js, Laravel, Python.",
    },
  ],
  education: [
    {
      degree: "BA in Computer Science",
      institution: "International Black Sea University",
      period: "2021 - Present",
      description:
        "Currently pursuing a Bachelor's degree in Computer Science, focusing on software development and computer theory.",
    },
    {
      degree: "PHP Development",
      institution: "Informational Technologies Academy",
      period: "2021",
      description:
        "Completed specialized training in PHP development, focusing on web application development and backend systems.",
    },
    {
      degree: "Python Development",
      institution: "IT Center Mziuri",
      period: "2020",
      description:
        "Learned Python programming with a focus on application development and data processing.",
    },
    {
      degree: "Competitive Programming",
      institution: "IT Center Mziuri",
      period: "2017 - 2020",
      description:
        "Participated in competitive programming training, mastering algorithms and data structures while developing strong problem-solving skills.",
    },
    {
      degree: "Programming Basics",
      institution: "IT Center Mziuri",
      period: "2016 - 2017",
      description:
        "Started my formal programming education, learning fundamental concepts and basic programming principles.",
    },
  ],
};

export default content;
