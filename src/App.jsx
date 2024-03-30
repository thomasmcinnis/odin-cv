import { useState } from "react";

import { Form, PersonalInfoForm, SkillsForm } from "./components/form";
import { Preview, HeaderSection, SkillsSection } from "./components/preview";

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
    const [roles, setRoles] = useState([]);
    const [education, setEducation] = useState([]);

    return (
        <>
            <header>
                <h1>CV Builder</h1>
            </header>
            <main>
                <Form>
                    <PersonalInfoForm person={person} setPerson={setPerson} />
                    <SkillsForm skills={skills} setSkills={setSkills} />
                </Form>
                <Preview>
                    <HeaderSection person={person} />
                    <SkillsSection skills={skills} />
                </Preview>
            </main>
        </>
    );
}

export default App;
