import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
]);

const root = React.DOM.createroot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
); 