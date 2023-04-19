export let CardMaker = (props) => {
    return (
        <div className="cards" id={props.name} onClick={props.function}>
            <h3 id={props.name}>{props.name}</h3>
        </div>
    )
}