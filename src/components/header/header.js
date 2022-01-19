import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assests/loopit.png';
import { logout } from '../../services/api';
function Header() {
    const handleLogout = () => {
        logout().then((res)=>{
            sessionStorage.clear();
            window.location.pathname = '/login';
        });
    }
    return (
       <nav className="headers">
           <div>
                <img src= {logo} className="logo" alt="None"></img>
                <ul className='content'>
                    
                    <li>
                        <Link className="btn-header" to="/">Home</Link>
                        </li>
                    {sessionStorage.getItem('token')?
                        <button className="btn-logout" onClick={handleLogout}><span>{sessionStorage.getItem('user')}</span></button>
                    :''}
                </ul>
        </div>    
        </nav>
    );

}
export default Header;