import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Header() {
    let navigate = useNavigate();

    const { loggedIn, setLoggedIn, setUser } = useContext(appContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let loginButton = <button onClick={() => login()}>Login</button>
    let signUpButton = <button onClick={() => navigate('/SignUp')}>Sign Up</button>

    if (loggedIn) {
        loginButton = <button onClick={() => [setLoggedIn(false), setUser([])]}>Logout</button>
        signUpButton = <button onClick={() => navigate('/myprofile')}>My Profile</button>
    }


    function login() {
        let user = { username: username, password: password };
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.length == 0) {
                    alert('user not found')
                } else {
                    setLoggedIn(true)
                    setUser(data)
                    alert(`Welcome back ${data[0].firstname}!`)
                }
            })
    }


    return (
        <>
            <div onClick={() => navigate('/')}>Food Viewer</div>
            <button onClick={() => navigate('/')}>Home</button>
            username<input id='login' type='text' onChange={(e) => setUsername(e.target.value)} />
            password<input id='login' type='password' onChange={(e) => setPassword(e.target.value)} />
            {loginButton}
            {signUpButton}
            <input type='search' />
            <button>Search</button>


        </>
    )
}

export default Header;