import { meta, shopify, starbucks, tesla } from "../assets/images";
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
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
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
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
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
    // }
];

export const experiences = [
    {
        title: "Software Development Engineer",
        company_name: "Intellewings Pvt Ltd",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "January 2023 - Present",
        points: [
            "Worked within Transaction Monitoring Team, actively contributing to a dynamic environment dedicated to enhancing Anti-Money Laundering (AML) processes",
            // "Created and implemented a demonstration application for Tradeline Securities, specializing in financial brokerage services. Focused on the identification and integration of Anti-Money Laundering (AML) checks tailored to brokerage operations, presenting them through an intuitive Web Application",
            // "Developed a demonstration application tailored for Jio Payments Bank, with a focus on detecting Money Mule cases and identifying collisions between multiple accounts. Integrated anti-money laundering (AML) checks into the application to enhance security measures. Designed and implemented the user interface (UI) to facilitate seamless navigation and interaction",
            "Developed Risk Based Assessment (RBA) in SpringBoot for monitoring and updating customer risk.",
            // "Spearheaded a small team while working with Berar Finance Limited, overseeing successful deployment of multiple releases into production while maintaining open communication with the client and providing crucial GoLive support during critical phases",
            "Leveraged Python and Spark to streamline the ETL process, significantly enhancing data processing efficiency and overall system performance for Star Health Insurance. Also responsible for testing the end-to-end functionality of the ETL process, ensuring the reliability and accuracy of data transformations and processing",
            // "Created and implemented an interactive diagram named Intellewings’ Eye using JointJs, depicting relationships between various entities, particularly emphasizing the linkage between customers accounts and transactions. This visualization was developed specifically for Flipkart",
            "Utilized the Express.js framework and the pdfkit library to craft a Management Information System (MIS) Report, showcasing weekly activity information within the system, custom-tailored for Tata Consultancy Services",
            "Successfully upgraded Angular 7 to version 15 and performed updates on multiple associated libraries.",
            "Skills : Python, ASP.Net Core, Angular, JavaScript, Java, MySQL, HTML, CSS, GIT, Docker, Kubernetes"
        ],
    },
    {
        title: "Teaching Assistant",
        company_name: "Coding Ninjas",
        icon: tesla,
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
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Pomodor Clock',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Dice Roll Game',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];