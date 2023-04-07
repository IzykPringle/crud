import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header';
import SignUp from './components/signup';
import Profile from './components/profile';
import Home from './components/home';
import ItemDetails from './components/itemdetails';

export const appContext = React.createContext();

function App() {
let profileRoute = '';
let signupRoute = <Route path='/signup' element={<SignUp/>}/>
let homeRoute = <Route path='/' element={<Home/>}/>
let itemDetailsRoute = <Route path='/itemdetails' element={<ItemDetails/>}/>;
const [loggedIn, setLoggedIn] = useState(false);
const [items, setItems] = useState([]);
const [user, setUser] = useState();
const [detailItem, setDetailItem] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080')
  .then(res => res.json())
  .then(data => setItems(data))
  console.log(items)
}, [])

console.log(items)

if (loggedIn) {
  profileRoute = <Route path='/myprofile' element={<Profile/>}/>;
  signupRoute = '';
}

  return (
    <>
    <appContext.Provider value={{loggedIn, setLoggedIn, items, setItems, user, setUser, detailItem, setDetailItem}}>
    <Header/>
    <Routes>
{signupRoute}
{profileRoute}
{homeRoute}
{itemDetailsRoute}




    </Routes>
    </appContext.Provider>
    </>
  );
}

export default App;
