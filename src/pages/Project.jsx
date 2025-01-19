import { projects } from "../data/data"

export default function Project(){
    return (
        <div className="project-page">
            <div className="project-page-description">
                <h1>Projects</h1>
                <p>
                    A collection of projects from my self-learning journey and school assignments. Explore the details, live demos, and source code!
                </p>
            </div>
            <div className="projects-section">
                {projects.map(({projectName,projectDescription,languagesUsed,sourceCode,liveView,displayImg}) =>
                    (<div className="project" key={projectName}>
                        <img src={displayImg} alt={projectName}/>
                        <div className ="project-detailed">
                            <h5>{projectName}</h5>
                            <p className="project-des">{projectDescription}</p>
                            <div className="project-button">
                                <button onClick={() => window.open(sourceCode, "_blank")}>Source Code</button>
                                <button onClick={() => window.open(liveView, "_blank")}>Live View</button>
                            </div>
                        </div>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}