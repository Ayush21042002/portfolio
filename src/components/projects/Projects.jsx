import ProjectCard from "../projectCard/ProjectCard";
import "./projects.css";
import {projects} from "../../data";

function Projects() {
    return (
        <div className="projects" data-aos="fade-up">
            <div className="projectWrapper">
                <h2 className="projectLogo">Projects</h2>
                <ul className="projectList">
                    {projects.map((project,i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects
