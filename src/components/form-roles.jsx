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
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setRoles([
            ...roles,
            createRole(role)
        ]);
        setRole(initialState);
    }

    function handleDelete(e, id) {
        e.preventDefault();
        setRoles(roles.filter(r => r.id !== id));
    }

    function handleEdit(e, role) {
        e.preventDefault();
        setRole(role);
        setRoles(roles.filter(r => r.id !== role.id));
    }

    // Add function to edit
    // should grab the id of the item, set that item from roles
    // to role, and delete it from roles
    // Need to display a list of roles below with a delete and edit button

    return (
        <div>
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
                <button onClick={e => handleSubmit(e)}
                >Add</button>
            </form>
            <ul>
                {roles && roles.map(role => (
                    <li key={role.id}>
                        {role.title}
                        <button onClick={e => handleDelete(e, role.id)}
                        >Delete</button>
                        <button onClick={e => handleEdit(e, role)}
                        >Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

