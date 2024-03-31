import { useState } from "react";

import Panel from "./components/panel";
import { PersonalInfoForm, SkillsForm } from "./components/form";
import { Preview, HeaderSection, SkillsSection, RolesSection, EducationSection } from "./components/preview";

import { RolesForm } from "./components/form-roles";
import { initialRoles } from "./model/roles";

import { EducationForm } from "./components/form-education";
import { initialCourses } from "./model/courses";

const initialDetails = {
    name: 'Guido Sarducci',
    email: 'fathrG@observatore.it',
    phone: '1300 555 222'
}

const initialSkills = [
    { id: 0, name: 'Dough making' },
    { id: 1, name: 'Toppings' },
    { id: 2, name: 'Turning left' },
]

function App() {
    const [person, setPerson] = useState(initialDetails)
    const [skills, setSkills] = useState(initialSkills)
    const [roles, setRoles] = useState(initialRoles);
    const [education, setEducation] = useState(initialCourses);
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
                    <EducationSection courses={education} />
                </Preview>
            </main>
        </>
    );
}

export default App;
