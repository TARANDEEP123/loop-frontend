import './Modal.css';

function Modal(props) {
    console.log(props);
    const setOpenModal = props.setOpenModal;


    return (
        <div className="modal">
            {props.children}
            {props.handleSubmit ?<button className="submit button" onClick={()=>props.handleSubmit(props.loanId)} type="button">Submit</button>:''}
            <button className="close" type="button" onClick={()=>setOpenModal(false)}>X</button>
        </div>
    )

}

export default Modal