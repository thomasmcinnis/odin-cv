import { useState } from "react";

import Panel from "./components/panel";
import { PersonalInfoForm, SkillsForm } from "./components/form";
import { Preview, HeaderSection, SkillsSection, RolesSection } from "./components/preview";

import { RolesForm } from "./components/form-roles";
import { initialRoles } from "./model/roles";

import { EducationForm } from "./components/form-education";

const initialDetails = {
    name: 'Thomas McInnis',
    email: 'hey@thomasmcinnis.com',
    phone: '+61 449 160 765'
}

const initialSkills = [
    { id: 0, name: 'JavaScript' },
    { id: 1, name: 'React' },
    { id: 2, name: 'CSS' },
]

function App() {
    const [person, setPerson] = useState(initialDetails)
    const [skills, setSkills] = useState(initialSkills)
    const [roles, setRoles] = useState(initialRoles);
    const [education, setEducation] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <header>
                <h1>CV Builder</h1>
            </header>
            <main>
                <section className="formSection">
                    <h2>Details</h2>
                    <Panel
                        title="Personal Information"
                        isActive={activeIndex === 0}
                        onShow={() => setActiveIndex(0)}
                    >
                        <PersonalInfoForm person={person} setPerson={setPerson} />
                    </Panel>
                    <Panel
                        title="Skills"
                        isActive={activeIndex === 1}
                        onShow={() => setActiveIndex(1)}
                    >
                        <SkillsForm skills={skills} setSkills={setSkills} />
                    </Panel>
                    <Panel
                        title="Work Experience"
                        isActive={activeIndex === 2}
                        onShow={() => setActiveIndex(2)}
                    >
                        <RolesForm roles={roles} setRoles={setRoles} />
                    </Panel>
                    <Panel
                        title="Education"
                        isActive={activeIndex === 3}
                        onShow={() => setActiveIndex(3)}
                    >
                        <EducationForm education={education} setEducation={setEducation} />
                    </Panel>
                </section>
                <Preview>
                    <HeaderSection person={person} />
                    <SkillsSection skills={skills} />
                    <RolesSection roles={roles} />
                </Preview>
            </main>
        </>
    );
}

export default App;
