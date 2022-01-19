// // import { env } from "../env";
let url = 'http://127.0.0.1:8000/' ;

export  function registerUser(user) {
     return fetch(url + "auth/register", {
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json',

        }}).then((res)=>res.json());
}

export  function loginUser(user) {
     return fetch(url + "auth/login", {
        method:"POST",
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json',
            'X-XSRF-TOKEN': (() => {
                        const name = 'XSRF-TOKEN';
                        const cookies = '; ' + document.cookie;
                        const parts = cookies.split('; ' + name + '=');
    
                        const value = parts.length == 2 ? parts.pop().split(';').shift() : null
    
    
    
                        console.log('>>> XSRF-TOKEN', value)
    
                        return value
                    })(),
        }}).then((res)=>res.json());
}
export  function getCarsList() {
     return fetch(url + "dashboard/cars", {
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + sessionStorage.getItem('token')
        }}).then((res)=>res.json());
}
export  function logout() {
     return fetch(url + "dashboard/logout", {
        method:"POST",
        body:{},
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Bearer '+ sessionStorage.getItem('token'),
        }}).then((res)=>res.json());
}
