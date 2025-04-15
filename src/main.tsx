
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ajout de logs pour déboguer les problèmes de chargement
console.log("Application initialization starting");

const rootElement = document.getElementById("root");
console.log("Root element found:", rootElement);

if (rootElement) {
  createRoot(rootElement).render(<App />);
  console.log("App rendered successfully");
} else {
  console.error("Root element not found, cannot mount React app");
}
