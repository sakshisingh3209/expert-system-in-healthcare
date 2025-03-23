import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* Update Profile */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-lg font-semibold">Update Profile</h3>
            <p className="text-sm text-gray-500">Update your personal information</p>
          </div>
          <button className="text-blue-500 hover:underline">
            Edit
          </button>
        </div>

        {/* Change Password */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-lg font-semibold">Change Password</h3>
            <p className="text-sm text-gray-500">Secure your account with a new password</p>
          </div>
          <button className="text-blue-500 hover:underline">
            Change
          </button>
        </div>

        {/* Notification Settings */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-lg font-semibold">Notification Settings</h3>
            <p className="text-sm text-gray-500">Manage your notification preferences</p>
          </div>
          <button className="text-blue-500 hover:underline">
            Manage
          </button>
        </div>

        {/* Logout Button */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
