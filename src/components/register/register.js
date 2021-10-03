import React, {useState} from 'react';
import './register.css'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Register = ({setLogInUser}) => {

    const [user, setUser] = useState({
        name: '',
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

    const register = () => {
        const {name, email, password} = user;
        axios.post('http://localhost:3001/api/users/register', user)
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
        <div className="register">
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Name?" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Email?" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Password?" onChange={ handleChange }></input>
            <div className="button" onClick={register}>Register</div>
            or
            <div className="button" onClick={() => history.push('/login')}>Login</div>
        </div>
    )
}

export default Register;