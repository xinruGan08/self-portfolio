import profile from "../assets/pp.png"
import { useNavigate } from "react-router"


export default function Home(){
    const navigate = useNavigate()

    return (
        <div className="home-page">
            <div>
                <h1>Hi My name is Gan Xin Ru</h1>
                <p>
                    I am a <strong>second-year Computer Science student at Monash University</strong>, currently <strong>seeking an internship opportunity from November 2025 to February 2026</strong> to enhance my skills and gain real-world experience in the tech industry.
                </p>
                <h5>Current CGPA: 3.945</h5>
                <div className="home-button">
                    <button onClick={()=>navigate("projects")}>Projects</button>
                    <button onClick={()=>navigate("contact")}>Contact</button>
                </div>
            </div>
            <img className="profile" src={profile}/>
        </div>
    )
}