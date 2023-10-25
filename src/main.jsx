import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Routes'
import Provider from './Component/Context/Provider'
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
