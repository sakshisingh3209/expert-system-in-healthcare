
import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import ServiceSection from "./components/ServiceSection";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";
import DoctorBooking from "./components/DoctorBooking";
import BookingList from "./components/BookingList";
import ManageBooking from "./components/ManageBooking";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/auth/Dashboard";
import  MedicalHistory from "./components/dashboard/sections/MedicalHistory";
import Appointments from "./components/dashboard/sections/Appointments";
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/service',
    element: <ServiceSection />
  },
  {
    path: '/doctors',
    element: <DoctorList />
  },
  {
    path: '/doctors/:id',
    element: <DoctorProfile />
  },
  {
    path: '/book/:id',
    element: (
      <ProtectedRoute>
        <DoctorBooking />
      </ProtectedRoute>
    )
  },
  {
    path: '/bookings',
    element: (
      <ProtectedRoute>
        <BookingList />
      </ProtectedRoute>
    )
  },
  {
    path: '/manage-appointments',
    element: (
      <ProtectedRoute>
        <ManageBooking />
      </ProtectedRoute>
    )
  },
  {
    path: '/doctor/:id',
    element: <DoctorProfile />
  },
  {
    path:'/dashboard',
    element:(
      <ProtectedRoute>
        <Dashboard/>
      </ProtectedRoute>
    ),
    children:[
      {
        path:"appointments",
        element:<Appointments/>
      },{
        path:"medical-history",
        element:<MedicalHistory/>
      }
    ]
  }

]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
