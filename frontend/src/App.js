import './App.css';
import React, {useState} from 'react';
import Header from './components/header';

export const appContext = React.createContext();

function App() {

const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
    <appContext.Provider value={{loggedIn, setLoggedIn}}>
    <Header/>
    
    
    
    </appContext.Provider>
    </>
  );
}

export default App;
