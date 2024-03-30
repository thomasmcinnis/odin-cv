import { useState } from "react";

import { Form, PersonalInfoForm, SkillsForm, EducationForm } from "./components/form";
import { Preview, HeaderSection, SkillsSection, RolesSection } from "./components/preview";

import { RolesForm } from "./components/form-roles";
import { initialRoles } from "./model/roles";

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
    const [openIndex, setOpen] = useState(0)

    return (
        <>
            <header>
                <h1>CV Builder</h1>
            </header>
            <main>
                <Form>
                    <PersonalInfoForm person={person} setPerson={setPerson} />
                    <SkillsForm skills={skills} setSkills={setSkills} />
                    <RolesForm roles={roles} setRoles={setRoles} />
                    <EducationForm education={education} setEducation={setEducation} />
                </Form>
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
