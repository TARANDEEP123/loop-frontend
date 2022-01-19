import { useEffect, useState } from "react";

import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../common/Loader/Loader";
import Modal from "../../common/Modal/Modal";
import { loginUser } from "../../services/api";
import Register from "../Register/Register";
import './Login.css'
function Login() {
    const navigate = useNavigate(); 
    const [openModal, setOpenModal] = useState(true);
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        'email':'',
        'password':''
    });
    const HandleForm = (event) => {
        event.preventDefault();
        setLoading(true)
         
        loginUser(user).then((result) => {
            if("code" in result && result.code !== 200){
                toast.error(result.error);
            }else if('data' in result){
                console.log(result);
                sessionStorage.setItem('token', result.data.access_token);
                sessionStorage.setItem('user', result.data.name);
                setLoading(false);
                toast.success("LoggedIn Successfully"); 
                navigate('/', {replace:true});
            }
            else{
                setLoading(false);
                toast.error("Error Successfully");  

            }        
        }).catch((err)=>{
            toast.error(err);

            console.log(err);
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
            <Modal setOpenModal={setOpenModal}>
                <div className="loginForm">
                    <h4 className="headers heading">Login</h4>
                    <form className="forms" onSubmit={HandleForm}>
                        <div className="email w-18">
                            <label className="labelName"  htmlFor="uname"><b>Username</b></label>
                            <input type="email" onChange={handleEmail}/>
                        </div>
                        <div className="pwd w-18">
                            <label className="labelName"  htmlFor="password"><b>Password</b></label>
                            <input type="password" onChange={handlePwd}/>
                        </div>
                        <button className="login w-18" type="submit">Login</button>
                        <button className="login w-18" type="button" onClick={()=> {navigate('/register',{replace:true})}}>Register</button>
                    </form> 
                </div>
            </Modal> 
        :''}
         { (loading) ? <Loader></Loader> : ''}
        </div>
    );
}
export default Login;