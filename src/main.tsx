import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'aos/dist/aos.css';
import './index.css';
import App from './App.tsx';
import AOS from 'aos';

AOS.init({
  duration: 1000,
  easing: "ease-in-out-back",
  once: false,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
