// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Reports = ({ patientId }) => {
//     const [reports, setReports] = useState([]); // ✅ Initialize as an empty array
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const fetchReports = async () => {
//             try {
//                 setLoading(true);
//                 setError("");

//                 const response = await axios.get(`/api/reports/${patientId}`);
//                 // ✅ Ensure the response is an array
//                 setReports(Array.isArray(response.data) ? response.data : []);
//             } catch (error) {
//                 setError(error.response?.data?.message || "Failed to load reports");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (patientId) {
//             fetchReports();
//         }
//     }, [patientId]);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p style={{ color: 'red' }}>{error}</p>;

//     return (
//         <div>
//             <h2>Medical Reports</h2>
//             {reports.length === 0 ? (
//                 <p>No reports available</p> // ✅ Graceful handling of empty data
//             ) : (
//                 <ul>
//                     {reports.map((report) => (
//                         <li key={report._id}>
//                             <p><strong>Disease Prediction:</strong> {report.analysisResult.diseasePrediction}</p>
//                             <p><strong>Recommendations:</strong> {report.analysisResult.recommendations || 'N/A'}</p>
//                             <p><strong>Date:</strong> {new Date(report.uploadDate).toLocaleDateString()}</p>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Reports;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = ({ patientId }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(`/api/reports/${patientId}`);
        setReports(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to load reports");
      } finally {
        setLoading(false);
      }
    };

    if (patientId) {
      fetchReports();
    }
  }, [patientId]);

  // ✅ Handle report deletion
  const handleDelete = async (reportId) => {
    try {
      await axios.delete(`/api/reports/${reportId}`);
      setReports(reports.filter(report => report._id !== reportId));
      alert("Report deleted successfully");
    } catch (error) {
      alert("Failed to delete report");
    }
  };

  // ✅ Handle report update
  const handleUpdate = async (reportId) => {
    const newPrediction = prompt("Enter new disease prediction:");
    const newRecommendation = prompt("Enter new recommendation:");

    if (!newPrediction || !newRecommendation) return;

    try {
      const response = await axios.put(`/api/reports/${reportId}`, {
        diseasePrediction: newPrediction,
        recommendations: newRecommendation,
      });

      if (response.status === 200) {
        setReports(reports.map(report =>
          report._id === reportId
            ? { ...report, analysisResult: response.data.analysisResult }
            : report
        ));
        alert("Report updated successfully");
      }
    } catch (error) {
      alert("Failed to update report");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Medical Reports</h2>
      {reports.length === 0 ? (
        <p>No reports available</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((report) => (
            <li key={report._id} className="p-4 border rounded-md shadow-md">
              <p><strong>Disease Prediction:</strong> {report.analysisResult.diseasePrediction}</p>
              <p><strong>Recommendations:</strong> {report.analysisResult.recommendations || 'N/A'}</p>
              <p><strong>Date:</strong> {new Date(report.uploadDate).toLocaleDateString()}</p>
              
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => handleUpdate(report._id)}
                  className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(report._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reports;
