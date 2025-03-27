
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
import DoctorDashboard from "./components/DoctorDashboard/DoctorDashboard";
import UpcomingAppointments from "./components/DoctorDashboard/MainContent/UpcomingAppointments";
import PatientList from "./components/DoctorDashboard/MainContent/PatientList";
import ProfileSection from "./components/DoctorDashboard/MainContent/ProfileSection";
import Settings from "./components/dashboard/sections/Settings";
import Reports from "./components/dashboard/sections/Reports";

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
  //patient
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
      },{
        path:"settings",
        element:<Settings/>
      },{
        path:"reports",
        element:<Reports/>
      },
      {
        path: 'doctors',
        element: <DoctorList />
      }
    ]
  },
  //doctor 
  {
    path: "/doctor-dashboard",
    element:<DoctorDashboard/>,
    children:[
      {
        path:"appointments",
        element:<UpcomingAppointments/>
      },
      {
        path:"patients",
        element:<PatientList/>
      },{
        path:"Profile",
        element:<ProfileSection/>
      },
      {
        path:"settings",
        element:<Settings/>
      }
    ],
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
