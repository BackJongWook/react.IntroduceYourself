import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import "./app.css";

/*
    포트폴리오를 어떻게 짤것인가.
    일단 Sticky Header
*/

function App(){

  return(<>
    <RouterProvider router={router}>

    </RouterProvider>
  </>)

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
