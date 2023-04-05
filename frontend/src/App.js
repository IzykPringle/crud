import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from './components/header';
import SignUp from './components/signup';
import Profile from './components/profile';

export const appContext = React.createContext();

function App() {
let navigate = useNavigate();
let profileRoute = '';
let signupRoute = <Route path='/signup' element={<SignUp/>}/>
const [loggedIn, setLoggedIn] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080')
  .then(res => res.json())
  .then(data => setItems(data))
})

if (loggedIn) {
  profileRoute = <Route path='/myprofile' element={<Profile/>}/>
  signupRoute = '';
}

  return (
    <>
    <appContext.Provider value={{loggedIn, setLoggedIn}}>
    <Header/>
    <Routes>
{signupRoute}
{profileRoute}




    </Routes>
{items.map((item) => <div>{item.itemname}</div>)}
    </appContext.Provider>
    </>
  );
}

export default App;
