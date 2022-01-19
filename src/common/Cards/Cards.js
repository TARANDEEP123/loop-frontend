import './Cards.css';

function Cards(props) {

    let classes = "cards " + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Cards