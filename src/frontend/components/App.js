import './App.css';
import Sidebar from './Sidebar.js';
import Home from './Home';
import Album from './Album';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { useState } from 'react';
import Create from './Create'


const App = () => {

  const [walletAddress, setWalletAddress] = useState('');

  async function requestAccount() {
    console.log('Requesting Account...')

    if(window.ethereum) {
      console.log('detected')

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('error connecting...')
      }

    } else {
      console.log('meta mask not detected')
    }
  }

  


  return (
    <Router>
        <div class="app">
          <header>
            <button onClick={requestAccount } >Connect Wallet</button>
            <h3>Wallet Address: {walletAddress} </h3>
          </header>
          
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/album' element={<Album />} /> 
            <Route path='/createnft' element={<Create />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;



// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>

