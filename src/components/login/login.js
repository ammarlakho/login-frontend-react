import React, {useState} from 'react';
import './login.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Login = ( {setLogInUser} ) => {

    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user, 
            [name]: value
        })
    }

    const login = () => {
        const {email, password} = user;
        axios.post('http://localhost:3001/api/users/login', user)
        .then(res => {
            console.log("BACKEND RES:", res)
            // alert(res.data.message)
            setLogInUser(res.data.user)
            history.push('/')
        })
        .catch(err => {
            console.log("BACKEND ERR:", err.response.data.message)
            alert(err.response.data.message)
        })
    }


    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Email?" onChange ={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Password?" onChange ={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            or
            <div className="button" onClick={() => history.push('/register')}>Register</div>
        </div>
    )
}

export default Login;