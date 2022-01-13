import "./projectCard.css";

function ProjectCard({project}) {
    return (
        <div className="projectCard" data-aos="fade-right">
            <img src={project.image_url} alt="" className="projectImg" />
            <div className="projectDesc">
                <h3 className="projectTitle">
                    {project.title}
                </h3>
                <p className="projectSummary">
                    {project.desc}
                </p>
                <ul className="projectTechs">
                    {project.stack.map((val,i) => (
                        <li className="stack" key={i} >{val}</li>
                    ))}   
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard
