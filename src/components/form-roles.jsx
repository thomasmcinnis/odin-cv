import { useState } from "react";
import { createRole } from "../model/roles";


export function RolesForm({ roles, setRoles }) {
    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')

    return (
        <section>
            <h3>Work Experience</h3>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                />
            </div>
            <button onClick={(e) => {
                e.preventDefault();
                const newRole = createRole({ title, company });
                setRoles([
                    ...roles,
                    newRole
                ]);
                setTitle('');
                setCompany('');
            }}
            >Add</button>
        </section>
    )
}

