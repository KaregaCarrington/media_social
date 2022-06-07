import React, { useEffect, useState } from 'react';
import { useMoralis } from "react-moralis";
import './App.css';
import Sidebar from './Sidebar.js';
import Home from './Home';
import Album from './Album';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';



const App = () => {

  const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
      if (isAuthenticated) {
        console.log("authenticated")
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const login = async () => {
        if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
  }

  return (
    
    <Router>
        <div class="app">
          <div>
            <button onClick={login}>Moralis Metamask Login</button>
            <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
          </div>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/album' element={<Album />} /> 
          </Routes>
        </div>
    </Router>
  );
}

export default App;



