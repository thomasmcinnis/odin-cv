import { useState } from "react";

import { Form, PersonalInfoForm } from "./components/form";
import { Preview, HeaderSection } from "./components/preview";

function App() {
    // Keeping this extremely dumb for the sake of exercise
    const [person, setPerson] = useState({ name: 'Thomas McInnis', email: 'hey@thomasmcinnis.com', phone: '+61 449 160 765' })
    const [skills, setSkills] = useState([]);
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
                </Form>
                <Preview>
                    <HeaderSection person={person} />
                </Preview>
            </main>
        </>
    );
}

export default App;
