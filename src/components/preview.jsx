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

export function RolesSection({ roles }) {
    return (
        <div className="pageSection">
            <p className="sectionTitle">Professional Experience</p>
            <ul className="rolesList">
                {roles && roles.map((role) => {
                    return (
                        <li key={role.id}>
                            <div>
                                <p>{role.startYear} - {role.endYear}</p>
                                <p>{role.location}</p>
                            </div>
                            <div>
                                <p className="roleCompany">{role.company}</p>
                                <p>{role.title}</p>
                                <p>{role.description}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export function EducationSection({ courses }) {
    return (
        <div className="pageSection">
            <p className="sectionTitle">Qualifications</p>
            <ul className="coursesList">
                {courses && courses.map((course) => {
                    return (
                        <li key={course.id}>
                            <div>
                                <p>{course.startYear} - {course.endYear}</p>
                                <p>{course.location}</p>
                            </div>
                            <div>
                                <p className="courseSchool">{course.school}</p>
                                <p>{course.title}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
