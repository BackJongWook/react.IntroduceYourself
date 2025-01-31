import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import "./app.css";

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
