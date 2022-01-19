import './App.css';
import Header from './components/header/header';
import { Route, BrowserRouter as Router, Routes , Navigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import List from './components/List/list';
import {useNavigate} from 'react-router';
import ProtectedRoute from './components/ProtectedRoute/protectedRoute';
import Footer from './components/footer/footer';

function App() {
//     let navigate = useNavigate();
//    if(!sessionStorage.getItem('token')) {
//             navigate("/login",{replace:true});
//     //     toast.error('Please Login', {theme:"dark"});
//     }  
  return (
    <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/login" element={<Login/>}>
                    </Route>
                    {/* <Route path="/">
                        <Home />
                    </Route> */}
                    <Route path="/register" element={<Register/>}>
                    </Route>
                    <Route path="/" element={<ProtectedRoute/>}>
                        <Route exact path="/" element={<List/>} />
                    </Route>
                    
                </Routes>
                {/* <ToastContainer position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                /> */}

            </main>
            <Footer></Footer>
        </div>
  );
}

export default App;
