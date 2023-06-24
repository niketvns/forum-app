import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {ForumProvider} from "./forumContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ForumProvider>
              <App />
          </ForumProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
