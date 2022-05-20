import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './frontend/components/App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://ruk2roswd0b9.usemoralis.com:2053/server" appId="CWiZKhBbyit1f5BrosRq5ma2RhfjRNCHJR42Y6lN">,
      <App />
    </MoralisProvider>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
