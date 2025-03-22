import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1 ml-64">
        {/* Header */}
        <Header />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
