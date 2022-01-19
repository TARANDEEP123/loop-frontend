import "./Table.css";

function Table(props) {
    return (
        <table title={props.title} className="table">
            <tbody>
                {props.children}
            </tbody>
        </table>
    )

}
export default Table;