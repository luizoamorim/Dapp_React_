import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import logo from '../../ethereum.svg'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const users = [{userName: 'luiz.oamorim@gmail.com', userPass: '1234'}]
    const [userName, setUserName] = useState();
    const [userPass, setUserPass] = useState();

    const handleLogin = () => {
        users.filter(user => user.userName === userName && user.userPass === userPass).length > 0 ?
        <Link to="/dashboard" /> :
        toast('User do not exist!')
    }

    return (
        <div className="Login">
            <header className="Login-header">
                <img src={logo} className="Login-logo" alt="logo" />
                <p>username</p><input onChange={(e) => {setUserName(e.target.value)}} />
                <p>password</p><input type="password" onChange={(e) => {setUserPass(e.target.value)}} />
                <div className="Login-go-btn" onClick={handleLogin}>
                    <p>Go</p>
                </div>
            </header>
        </div>
    )
}

export default Login