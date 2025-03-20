import React from "react"
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";





const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/About',
    element:<AboutPage/>
      }
]);

function App() {
  

  return (
    <div>
      
<RouterProvider router={appRouter}/>
    </div>
  );
}

export default App
