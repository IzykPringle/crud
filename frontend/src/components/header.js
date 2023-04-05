import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../App';

function Header () {
let navigate = useNavigate();

    const { loggedIn, setLoggedIn } = useContext(appContext)
    let loginButton = <button onClick={() => setLoggedIn(true)}>Login</button>
    let signUpButton = <button onClick={() => navigate('/SignUp')}>Sign Up</button>

if (loggedIn) {
loginButton = <button onClick={() => setLoggedIn(false)}>Logout</button>
signUpButton = <button onClick={() => navigate('/myprofile')}>My Profile</button>
}


    return (
        <>
        <div onClick={() => navigate('/')}>Food Viewer</div>
        <button onClick={() => navigate('/')}>Home</button>
        username<input id='login' type='text'/>
        password<input id='login' type='password'/>
        {loginButton}
        {signUpButton}
        <input type='search'/>
        <button>Search</button>
        
        
        </>
    )
}

export default Header;