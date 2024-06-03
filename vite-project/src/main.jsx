import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root') //<div id="root"></div>
const vRoot = ReactDOM.createRoot(root)


vRoot.render(
  <App />
)


/* 
vRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 
*/