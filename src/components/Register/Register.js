import { useState} from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import Modal from "../../common/Modal/Modal";
import { toast } from "react-toastify";

import { registerUser } from "../../services/api";
import './Register.css'
import Login from "../Login/Login";
function Register() {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(true);
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        'name':'',
        'email':'',
        'password':''
    });
    
    const HandleForm = (event) => {
         event.preventDefault();
        setLoading(true)
        registerUser(user).then((result)=> {
            setLoading(false);
            toast.success("Registered Successfully");
            navigate('/login',{replace: true});
           
            // <Link to="/login"></Link>
            
        }).catch((err)=>{
            toast.error(err);

            console.log(err);
        });

    }
    const handleName = (event) =>{
        setUser((prevState) => {
                return {...prevState,name:event.target.value}
        });
    }
    const handleEmail = (event) =>{
        setUser((prevState) => {
                return {...prevState,email:event.target.value}
        });
    }
    const handlePwd = (event) =>{
        setUser((prevState) => {
                return {...prevState,password:event.target.value}
    });
    }
     return (
         <div>
            {openModal ? 
            <Modal setOpenModal = {setOpenModal}>
                <div className="loginForm">
                    <h4 className="headers heading">Register</h4>
                    <form className="forms" onSubmit={HandleForm}>
                        <div className="email w-18">
                            <label className="labelName"  htmlFor="uname"><b>Name</b></label>
                            <input type="text" required onChange={handleName}/>
                        </div>
                        <div className="email w-18">
                            <label className="labelName"  htmlFor="uname"><b>Email</b></label>
                            <input type="email" required onChange={handleEmail}/>
                        </div>
                        <div className="pwd w-18">
                            <label className="labelName"  htmlFor="password"><b>Password</b></label>
                            <input type="password" required onChange={handlePwd}/>
                        </div>
                        <button className="login w-18" type="submit">Register</button>
                        <button className="login w-18" type="button"><Link to="/login">Login</Link></button>
                    </form> 
                </div>
            </Modal>:'' }
            { (loading) ? <Loader></Loader> : ''}
        </div>

    );
}
export default Register;