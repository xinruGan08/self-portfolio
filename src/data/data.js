import tenzies from "../assets/tenzies.png";
import endGame from "../assets/endgame.png";
import portfolio from "../assets/portfolio.png"

const skills = [
    { language: "HTML", color: "#E44D26", textColor: "#FFFFFF" },        // HTML color
    { language: "CSS", color: "#2965F1", textColor: "#FFFFFF" },         // CSS color
    { language: "Javascript", color: "#F7DF1E", textColor: "#000000" },  // JavaScript color
    { language: "Java", color: "#007396", textColor: "#FFFFFF" },        // Java color
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
    projectDescription: "A project that simulates the A project that includes my portfolio, showcasing the outcome of self-learning React.",
    languagesUsed: ["HTML", "CSS", "JavaScript", "React"],
    sourceCode: "https://github.com/xinruGan08/self-portfolio",
    liveView: "https://portfolio-xr.netlify.app/",
    displayImg: portfolio
}
];


export {skills, projects};