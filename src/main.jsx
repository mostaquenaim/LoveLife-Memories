import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Routes'
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
