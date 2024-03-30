export default function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <>{children}</>
            ) : (
                <button onClick={onShow}>Show</button>
            )}
        </section>
    )
}
