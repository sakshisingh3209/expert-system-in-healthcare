import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/redux/userSlice";
import { LogOut } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md flex items-center justify-between px-6 py-4">
      {/* Welcome Message */}
      <h2 className="text-xl font-semibold">Welcome, {user?.username}</h2>

      {/* Logout Button */}
      <button 
        onClick={handleLogout} 
        className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
      >
        <LogOut className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default Header;
