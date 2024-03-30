export function Preview({ children }) {
    return (
        <section className="preview">
            <h2>Document Preview</h2>
            <div className="document">
                {children}
            </div>
        </section>
    )
}

export function HeaderSection({ person }) {
    return (
        <div className="pageHeader">
            <p className="name">{person.name}</p>
            <div className="contact">
                <p>{person.email}</p>
                <p>{person.phone}</p>
            </div>
        </div>
    )
}

export function SkillsSection({ skills }) {
    return (
        <div className="pageSection">
            <p className="sectionTitle">Skills</p>
            <ul className="skillsList">
                {skills && skills.map((skill) => {
                    return (
                        <li key={skill.id}>{skill.name}</li>
                    )
                })}
            </ul>

        </div>
    )
}
