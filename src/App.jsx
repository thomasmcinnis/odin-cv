import { useState } from "react";

import { Form, PersonalInfoForm, SkillsForm, RolesForm, EducationForm } from "./components/form";

function App() {
    // Keeping this extremely dumb for the sake of exercise
    const [person, setPerson] = useState({ name: 'Thomas McInnis', email: 'hey@thomasmcinnis.com', phone: '+61 449 160 765' })
    const [skills, setSkills] = useState([]);
    const [roles, setRoles] = useState([]);
    const [education, setEducation] = useState([]);

    return (
        <main>
            <h1>CV Builder</h1>
            <Form>
                <PersonalInfoForm person={person} setPerson={setPerson} />
            </Form>
            <div className="preview"></div>
        </main>
    );
}

export default App;
