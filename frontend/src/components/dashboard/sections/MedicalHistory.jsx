import { useState } from "react";

const MedicalHistory = ({ patientId }) => {
  const [formData, setFormData] = useState({
    diagnosis: "",
    medications: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/medical-history/${patientId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Medical history added successfully");
        setFormData({
          diagnosis: "",
          medications: "",
          notes: "",
        });
      } else {
        const data = await response.json();
        alert(data.message || "Failed to add medical history");
      }
    } catch (error) {
      console.error("Error adding medical history:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Medical History</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Diagnosis</label>
          <input
            type="text"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Medications</label>
          <input
            type="text"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Notes</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add History
        </button>
      </form>
    </div>
  );
};

export default MedicalHistory;
