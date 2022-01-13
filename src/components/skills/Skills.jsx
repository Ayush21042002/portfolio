import "./skills.css";
import {skills} from "../../data";
import SkillsDomain from "../skillsdomain/SkillsDomain";

function Skills() {
    return (
        <div className="skills" data-aos='fade-up'>
            <h1 className="skillsTitle">
                Skills
            </h1>
            <div className="skillsWrapper">
                <ul className="skillsDomainList">
                    {skills.map((skill,i) => (
                        <SkillsDomain key={i} domain={skill} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills
