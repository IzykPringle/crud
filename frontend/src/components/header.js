import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Header() {
    let navigate = useNavigate();

    const { loggedIn, setLoggedIn, user, setUser } = useContext(appContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let loginButton = <button onClick={() => login()}>Login</button>
    let signUpButton = <button onClick={() => navigate('/SignUp')}>Sign Up</button>
    let welcomMessage = '';
    let loginField = <input id='login' placeholder='username:' type='text' onChange={(e) => setUsername(e.target.value)} />;
    let passwordField = <input id='login' placeholder='password:' type='password' onChange={(e) => setPassword(e.target.value)} />;

    if (loggedIn) {
        loginButton = <button onClick={() => [setLoggedIn(false), setUser([]), navigate('/')]}>Logout</button>;
        signUpButton = <button onClick={() => navigate('/myprofile')}>My Profile</button>;
        welcomMessage = <div>{`Welcome ${user[0].firstname}!`} </div>;
        loginField = '';
        passwordField = '';
    }


    function login() {
        if (username == undefined || password == undefined) {
            alert('username or password is incorrect')
            return;
        }
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
                    navigate('/myprofile')
                }
            })
    }


    return (
        <>
            <div id='headercontainer'>
                <div>
                    <div id='homebutton'> <button onClick={() => navigate('/')}>Home</button> </div> <br></br>
                    <div id='search'>
                        <input type='search' />
                        <button>Search</button>
                    </div>
                </div>
                <div id='logo'>
                    <h2 onClick={() => navigate('/')}>Grocery Stock Galore!</h2>
                </div>
                <div id='logincontainer'>
                    <div> {welcomMessage} {loginField} </div>
                    {passwordField}
                    <div> {loginButton} {signUpButton} </div>
                </div>

            </div>
        </>
    )
}

export default Header;