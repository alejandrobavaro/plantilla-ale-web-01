import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

<<<<<<< HEAD
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
=======
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
>>>>>>> c0bbc7da6f3e82aba72b5858807583646575447d
