import { skills } from "../data/data"

export default function About(){
    return (

        <div className="about-section">
            <div className="about-content">
            <h2>Get to know me!</h2>
            <p>
                I'm a Computer Science student at Monash University Malaysia. I love to learn new things, so I often self-learn during my free time. This website is one of my projects to showcase my skills.
            </p> 
            </div>        

            <div className="skills-section">
            <h2>My skills</h2>
                <div className="skill-box">
                {skills.map(({ language, color, textColor }) => (
                    <div 
                        className="skill" 
                        style={{ backgroundColor: color, color: textColor }} 
                        key={language}
                    >
                        {language}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}