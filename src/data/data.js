import tenzies from "../assets/projects/tenzies.png";
import endGame from "../assets/projects/endgame.png";
import portfolio from "../assets/projects/portfolio.png"

import advancedReact from "../assets/certificate/advancedReact.jpg"
import reactBasic from "../assets/certificate/reactBasic.jpg"
import pass from "../assets/certificate/PASS.jpg"

const skills = [
    { language: "HTML", color: "#E44D26", textColor: "#FFFFFF" },       
    { language: "CSS", color: "#2965F1", textColor: "#FFFFFF" },         
    { language: "Javascript", color: "#F7DF1E", textColor: "#000000" },  
    { language: "Java", color: "#007396", textColor: "#FFFFFF" },        
    { language: "Python", color: "#306998", textColor: "#FFFFFF" },      // Python color
    { language: "React", color: "#61DAFB", textColor: "#000000" },       // React color
    { language: "Git", color: "#F05033", textColor: "#FFFFFF" },         // Git color
    { language: "GitHub", color: "#181717", textColor: "#FFFFFF" }       // GitHub color
];

const projects = [
{
    projectName: "Tenzies",
    projectDescription: "A project that simulates the Tenzies game, structured with Scrimba, includes additional features such as a timer, best score tracking, and background music when winning.",
    languagesUsed: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/xinruGan08/Tenzies",
    liveView: "https://tenzies-xr.netlify.app/",
    displayImg: tenzies
},
{
    projectName: "End Game - Hang Man",
    projectDescription: "A game simulating Hangman, allowing the user to guess up to 8 times, created with Scrimba. It includes additional features like listening to keyboard events and enhanced usability.",
    languagesUsed: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/xinruGan08/Endgame",
    liveView: "https://hangman-endgame-xr.netlify.app/",
    displayImg: endGame
},
{
    projectName: "Portfolio",
    projectDescription: "A project that includes my portfolio, showcasing the outcome of self-learning React.",
    languagesUsed: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/xinruGan08/self-portfolio",
    liveView: "https://portfolio-xr.netlify.app/",
    displayImg: portfolio
}
];

const achievements = [
    {
        name: "PASS Leader" ,
        description: "Conducted four 1-hour weekly online classes for 9 weeks, supporting students' understanding.",
        date_issued: "22/1/2025",
        img_preview: pass
    },
    {
        name: "Advanced React",
        description: "Master advanced React concepts, including manipulating props, creating compound components, using Context, Refs, and building custom hooks",
        date_issued: "10/1/2025",
        img_preview: advancedReact
    },
    {
        name: "React Basics",
        description: "Learn the fundamentals of React, including custom components, JSX, class-based components, styling, and understanding why React is used",
        date_issued: "23/12/2024",
        img_preview: reactBasic
    }
]


export {skills, projects, achievements};