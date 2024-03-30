export function Form({ children }) {
    return (
        <form action="">
            {children}
        </form>
    )
}
export function PersonalInfoForm({ person, setPerson }) {
    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value,
        })
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value,
        })
    }

    function handlePhoneChange(e) {
        setPerson({
            ...person,
            phone: e.target.value,
        })
    }

    return (
        <div>
            <h2>Personal information</h2>
            <div>
                <label htmlFor="name">Your name</label>
                <input
                    type="text"
                    id="name"
                    value={person.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={person.email}
                    placeholder="example@email.com"
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone number</label>
                <input
                    type="text"
                    id="phone"
                    value={person.phone}
                    placeholder="+1 999 999 999"
                    onChange={handlePhoneChange}
                />
            </div>
        </div>
    )
}

export function SkillsForm(formData, handleChange) {
    return (
        <div>Skills Section</div>
    )
}

export function RolesForm(formData, handleChange) {
    return (
        <div>Roles Section</div>
    )
}

export function EducationForm(formData, handleChange) {
    return (
        <div>Education Section</div>
    )
}
