import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reports = ({ patientId }) => {
    const [reports, setReports] = useState([]); // ✅ Initialize as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReports = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await axios.get(`/api/reports/${patientId}`);
                // ✅ Ensure the response is an array
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Medical Reports</h2>
            {reports.length === 0 ? (
                <p>No reports available</p> // ✅ Graceful handling of empty data
            ) : (
                <ul>
                    {reports.map((report) => (
                        <li key={report._id}>
                            <p><strong>Disease Prediction:</strong> {report.analysisResult.diseasePrediction}</p>
                            <p><strong>Recommendations:</strong> {report.analysisResult.recommendations || 'N/A'}</p>
                            <p><strong>Date:</strong> {new Date(report.uploadDate).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Reports;
