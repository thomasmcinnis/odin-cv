import { useState } from "react";
import { createRole } from "../model/roles";

const formFields = [
    { name: 'title', prettyName: 'Job Title', type: 'text', required: true, },
    { name: 'company', prettyName: 'Company', type: 'text', required: true, },
    { name: 'location', prettyName: 'Location', type: 'text', required: true, },
    { name: 'startYear', prettyName: 'Start Date', type: 'text', required: true, },
    { name: 'endYear', prettyName: 'End Date', type: 'text', required: true, },
    { name: 'description', prettyName: 'Responsibilities', type: 'text', required: false, },
]

const initialState = {
    title: '',
    company: '',
    location: '',
    startYear: '',
    endYear: '',
    description: ''
}

export function RolesForm({ roles, setRoles }) {
    const [role, setRole] = useState(initialState)

    function handleChange(e) {
        setRole({
            ...role,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form>
            {formFields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name}>{field.prettyName}</label>
                    <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={role[field.name]}
                        onChange={e => handleChange(e)}
                        required={field.required}
                    />
                </div>
            ))}
            <button onClick={(e) => {
                e.preventDefault();
                setRoles([
                    ...roles,
                    createRole(role)
                ]);
                setRole(initialState)
            }}
            >Add</button>
        </form>
    )
}

