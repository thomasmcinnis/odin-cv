import { useState } from "react";
import { createCourse } from "../model/courses";

const formFields = [
    { name: 'title', prettyName: 'Certification', type: 'text', required: true, },
    { name: 'school', prettyName: 'School', type: 'text', required: true, },
    { name: 'location', prettyName: 'Location', type: 'text', required: true, },
    { name: 'startYear', prettyName: 'Start Date', type: 'text', required: true, },
    { name: 'endYear', prettyName: 'End Date', type: 'text', required: true, },
]

const initialState = {
    title: '',
    school: '',
    location: '',
    startYear: '',
    endYear: '',
}

export function EducationForm({ education, setEducation }) {
    const [course, setCourse] = useState(initialState)

    function handleChange(e) {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setEducation([
            ...education,
            createCourse(course)
        ]);
        setCourse(initialState);
    }

    function handleDelete(e, id) {
        e.preventDefault();
        setEducation(education.filter(c => c.id !== id));
    }

    function handleEdit(e, course) {
        e.preventDefault();
        setCourse(course);
        setEducation(education.filter(c => c.id !== course.id));
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
                            value={course[field.name]}
                            onChange={e => handleChange(e)}
                            required={field.required}
                        />
                    </div>
                ))}
                <button onClick={e => handleSubmit(e)}
                >Add</button>
            </form>
            <ul>
                {education && education.map(course => (
                    <li key={course.id}>
                        {course.title}
                        <span className="itemButtons">
                            <button onClick={e => handleDelete(e, course.id)}
                            >Delete</button>
                            /
                            <button onClick={e => handleEdit(e, course)}
                            >Edit</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
