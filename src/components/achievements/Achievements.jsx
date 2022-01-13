import "./achievements.css";
import { achievements } from "../../data";

function Achievements() {
    return (
        <div className="achievements">
            <h1 className="achievementTitle" data-aos="fade-up">
                Achievements
            </h1>
            <ul className="achievementWrapper" data-aos="fade-left">
                {achievements.map((val,i) => (
                    <li key={i} className="achievement">
                        {val}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Achievements
