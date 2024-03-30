import { useState } from "react";

export function Form({ children }) {
    return (
        <form>
            <h2>Details</h2>
            {children}
        </form>
    )
}
export function PersonalInfoForm({ person, setPerson }) {
    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section>
            <h3>Personal information</h3>
            <div>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    value={person.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={person.email}
                    placeholder="example@email.com"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone number</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="mobile tel"
                    value={person.phone}
                    placeholder="+1 999 999 999"
                    onChange={handleChange}
                />
            </div>
        </section>
    )
}

let nextID = 3;
export function SkillsForm({ skills, setSkills }) {
    const [name, setName] = useState('');

    return (
        <section>
            <h3>Skills list</h3>
            <div>
                <label htmlFor="skill">Add skill</label>
                <input
                    type="text"
                    name="skill"
                    id="skill"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <p>{name}</p>
                <button onClick={(e) => {
                    e.preventDefault();
                    setSkills([
                        ...skills,
                        { id: nextID++, name: name }
                    ]);
                    setName('');
                }}
                >Add</button>
            </div>
            <ul>
                {skills && skills.map(skill => (
                    <li key={skill.id}>
                        {skill.name}
                        <button
                            data-value={skill.id}
                            onClick={(e) => {
                                e.preventDefault();
                                setSkills(skills.filter(s => s.id !== skill.id));
                            }}
                        >Delete
                        </button>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export function RolesForm(formData, handleChange) {
    return (
        <div>Roles Section</div>
    )
}

export function EducationForm(formData, handleChange) {
    return (
        <div>Education Section</div>
    )
}
