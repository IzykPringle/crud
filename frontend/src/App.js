import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from './components/header';
import SignUp from './components/signup';
import Profile from './components/profile';
import Home from './components/home';

export const appContext = React.createContext();

function App() {
let navigate = useNavigate();
let profileRoute = '';
let signupRoute = <Route path='/signup' element={<SignUp/>}/>
let homeRoute = <Route path='/' element={<Home/>}/>
const [loggedIn, setLoggedIn] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080')
  .then(res => res.json())
  .then(data => setItems(data))
  console.log(items)
}, [])

if (loggedIn) {
  profileRoute = <Route path='/myprofile' element={<Profile/>}/>
  signupRoute = '';
}

  return (
    <>
    <appContext.Provider value={{loggedIn, setLoggedIn, items}}>
    <Header/>
    <Routes>
{signupRoute}
{profileRoute}
{homeRoute}




    </Routes>
    </appContext.Provider>
    </>
  );
}

export default App;
