import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/redux/userSlice";

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isManagingNotifications, setIsManagingNotifications] = useState(false);

  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: user?.emailNotifications || false,
    smsNotifications: user?.smsNotifications || false,
  });

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  // Handle notification change
  const handleNotificationChange = (e) => {
    setNotificationSettings({
      ...notificationSettings,
      [e.target.name]: e.target.checked,
    });
  };

  // Update profile
  const handleProfileUpdate = () => {
    dispatch(updateUser(formData));
    setIsEditingProfile(false);
  };

  // Change password
  const handleChangePassword = () => {
    console.log("Password changed:", passwordData);
    setIsChangingPassword(false);
  };

  // Update notifications
  const handleUpdateNotifications = () => {
    console.log("Notifications updated:", notificationSettings);
    setIsManagingNotifications(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* Update Profile */}
        <div
          className="flex justify-between items-center border-b pb-4 cursor-pointer"
          onClick={() => setIsEditingProfile(true)}
        >
          <div>
            <h3 className="text-lg font-semibold">Update Profile</h3>
            <p className="text-sm text-gray-500">
              Update your personal information
            </p>
          </div>
          <button className="text-blue-500 hover:underline">Edit</button>
        </div>

        {/* Change Password */}
        <div
          className="flex justify-between items-center border-b pb-4 cursor-pointer"
          onClick={() => setIsChangingPassword(true)}
        >
          <div>
            <h3 className="text-lg font-semibold">Change Password</h3>
            <p className="text-sm text-gray-500">
              Secure your account with a new password
            </p>
          </div>
          <button className="text-blue-500 hover:underline">Change</button>
        </div>

        {/* Notification Settings */}
        <div
          className="flex justify-between items-center border-b pb-4 cursor-pointer"
          onClick={() => setIsManagingNotifications(true)}
        >
          <div>
            <h3 className="text-lg font-semibold">Notification Settings</h3>
            <p className="text-sm text-gray-500">
              Manage your notification preferences
            </p>
          </div>
          <button className="text-blue-500 hover:underline">Manage</button>
        </div>
      </div>

      {/* Modal for Editing Profile */}
      {isEditingProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border p-2 rounded mb-2"
            />
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsEditingProfile(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleProfileUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Changing Password */}
      {isChangingPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Change Password</h3>
            <input
              type="password"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Current Password"
              className="w-full border p-2 rounded mb-2"
            />
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="New Password"
              className="w-full border p-2 rounded mb-2"
            />
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsChangingPassword(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleChangePassword}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Notification Settings */}
      {isManagingNotifications && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={notificationSettings.emailNotifications}
                onChange={handleNotificationChange}
              />
              <span>Email Notifications</span>
            </label>
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={notificationSettings.smsNotifications}
                onChange={handleNotificationChange}
              />
              <span>SMS Notifications</span>
            </label>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsManagingNotifications(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateNotifications}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
