import './App.css';
import React, {useState} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from './components/header';
import SignUp from './components/signup';

export const appContext = React.createContext();

function App() {
let navigate = useNavigate();
const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <appContext.Provider value={{loggedIn, setLoggedIn}}>
    <Header/>
    <Routes>
<Route path='/signup' element={<SignUp/>}/>



    </Routes>
    </appContext.Provider>
    </>
  );
}

export default App;
