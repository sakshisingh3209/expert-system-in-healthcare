import React from "react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/doctors");
  };

  return (
    <div className="text-center mt-12">
      <button
        onClick={handleBookingClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Book a Doctor
      </button>
    </div>
  );
};

export default CTA;
