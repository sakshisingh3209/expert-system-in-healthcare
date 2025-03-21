import React from "react"
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import ServiceSection from "./components/ServiceSection";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";
import DoctorBooking from "./components/DoctorBooking";
import BookingList from "./components/BookingList";
import ManageBooking from "./components/ManageBooking";





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
      },
      {
        path:'/Service',
        element:<ServiceSection/>
      },{
        path:"/doctors",
        element:<DoctorList/>
      },
      {
        path:"/doctors/:id",
        element:<DoctorProfile/>
      },{
        path:"/book/:id",
        element: <DoctorBooking/>
      },{
        path:'/bookings',
        element:<BookingList/>
      },
      {
        path:'/manage-appointments',
        element:<ManageBooking/>
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
