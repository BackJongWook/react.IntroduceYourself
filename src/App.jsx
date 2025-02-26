import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useAtomValue } from 'jotai';
import "./app.css";
import { BrowserWatcherProvider } from '@provider';
import { themeAtom } from '@jotai';
import { ThemeProvider } from 'styled-components';

/*
    포트폴리오를 어떻게 짤것인가.
    일단 Sticky Header
*/

function App(){
  const theme = useAtomValue(themeAtom);
  return(<>
    <BrowserWatcherProvider>    
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </BrowserWatcherProvider>
</>)

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
