export function Preview({ children }) {
    return (
        <section className="preview">
            <h2>Document Preview</h2>
            {children}
        </section>
    )
}

export function HeaderSection({ person }) {
    return (
        <div className="pageHeader">
            <p className="name">{person.name}</p>
            <div className="contact">
                <p>{person.email}</p>
                <p>{person.phone}</p>
            </div>
        </div>
    )
}
