import { int, CN } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    summiz,
    tailwindcss,
    typescript,
    angular,
    DotNet,
    java,
    python,
    mysql,
    docker,
    spring
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: spring,
    //     name: "Spring-Boot",
    //     type: "Backend",
    // },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend"
    },
    {
        imageUrl: DotNet,
        name: "Dot Net Core",
        type: "Backend"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Deployment"
    },
    {
        imageUrl: spring,
        name: "Spring-Boot",
        type: "Backend"
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database"
    }
];

export const experiences = [
    {
        title: "Software Development Engineer",
        company_name: "Intellewings Pvt Ltd",
        icon: int,
        iconBg: "#accbe1",
        date: "January 2023 - Present",
        points: [
            "Worked within Transaction Monitoring Team, actively contributing to a dynamic environment dedicated to enhancing Anti-Money Laundering (AML) processes",
            "Developed Risk Based Assessment (RBA) in SpringBoot for monitoring and updating customer risk.",
            "Leveraged Python and Spark to streamline the ETL process, significantly enhancing data processing efficiency and overall system performance for Star Health Insurance. Also responsible for testing the end-to-end functionality of the ETL process, ensuring the reliability and accuracy of data transformations and processing",
            "Utilized the Express.js framework and the pdfkit library to craft a Management Information System (MIS) Report, showcasing weekly activity information within the system",
            "Successfully upgraded Angular 7 to version 15 and performed updates on multiple associated libraries.",
            "Skills: Python, ASP.Net Core, Angular, JavaScript, Java, MySQL, HTML, CSS, GIT, Docker, Kubernetes"
        ],
    },
    {
        title: "Teaching Assistant",
        company_name: "Coding Ninjas",
        icon: CN,
        iconBg: "#fbc3bc",
        date: "October 2022 - January 2023",
        points: [
            "Monitoring Performance of Assigned Students.",
            "Participating in code reviews and Explaining Data Structures Concepts.",
            "Skills : Python, Data Structures, Algorithms, Object-Oriented Programming (OOP).",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/7373Mehar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mehar-mutreja-a8344518b/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Sorting Visualizer',
        description: 'Built a React/Redux application for visualizing sorting algorithms',
        link: 'https://sorting-visualizer-mehar.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Expense Tracker',
        description: 'A full-stack application built with React and Express to help users manage their finances efficiently.',
        link: 'https://github.com/7373Mehar/Money-Tracker',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Pomodoro Clock',
        description: 'A React-based pomodoro clock that helps users manage time efficiently with focused intervals and breaks.',
        link: 'https://pomodor-clock-mehar.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Dice Roll Game',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://dice-roll-game-jspractice.netlify.app/',
    }
];