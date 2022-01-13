import "./skillsDomain.css";

function SkillsDomain({domain}) {
    return (
        <li className="skillsDomain" data-aos="fade-left">
            <h4 className="domainTitle">
                {domain.title}
            </h4>
            <ul className="domainValues">
                {domain.value.map((v,i) => (
                    <li key={i} className="domainValue">
                        {v}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default SkillsDomain
