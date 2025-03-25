import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/DoctorDashboard/Sidebar";
import  Header from "../../components/DoctorDashboard/Header";

const DoctorDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col w-full">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="p-4">
          <Outlet /> {/* To render the child components dynamically */}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
