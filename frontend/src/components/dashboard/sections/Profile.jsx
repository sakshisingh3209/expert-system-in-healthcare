// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Existing Sections */}
//         <Link to="/appointments" className="p-4 bg-white shadow rounded-xl hover:bg-gray-50">
//           <h2 className="text-xl font-semibold">Appointments</h2>
//           <p className="text-gray-500">Manage your appointments</p>
//         </Link>
//         <Link to="/medical-history" className="p-4 bg-white shadow rounded-xl hover:bg-gray-50">
//           <h2 className="text-xl font-semibold">Medical History</h2>
//           <p className="text-gray-500">View and upload your medical history</p>
//         </Link>
        
//         {/* New Profile Section */}
//         <Link to="/profile" className="p-4 bg-white shadow rounded-xl hover:bg-gray-50">
//           <h2 className="text-xl font-semibold">Profile</h2>
//           <p className="text-gray-500">Manage your profile and settings</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Existing Sections */}
        <Link to="/appointments" className="p-4 bg-white shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p className="text-gray-500">Manage your appointments</p>
        </Link>
        <Link to="/medical-history" className="p-4 bg-white shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Medical History</h2>
          <p className="text-gray-500">View and upload your medical history</p>
        </Link>
        
        {/* New Profile Section */}
        <Link to="/profile" className="p-4 bg-white shadow rounded-xl hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-gray-500">Manage your profile and settings</p>
        </Link>
      </div>

      {/* Add Doctor List Below */}
      <div className="mt-8">
        <DoctorList />
      </div>
    </div>
  );
};

export default Dashboard;
