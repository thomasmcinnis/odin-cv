export default function Panel({ title, children, isActive, onShow }) {
    return (
        <section className="panel">
            <div className="panelHeader">
                <h3>{title}</h3>
                {!isActive && <button onClick={onShow}>Show</button>}
            </div>
            {isActive && <>{children}</>}
        </section>
    )
}
