import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import DoctorCard from './DoctorCard';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Static Data
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const staticDoctors = [
          {
            id: 1,
            name: 'Dr. John Doe',
            specialization: 'Cardiologist',
            rating: 4.5,
            fee: 500,
          },
          {
            id: 2,
            name: 'Dr. Jane Smith',
            specialization: 'Dermatologist',
            rating: 4.8,
            fee: 400,
          },
          {
            id: 3,
            name: 'Dr. Emily Johnson',
            specialization: 'Neurologist',
            rating: 4.3,
            fee: 600,
          },
          {
            id: 4,
            name: 'Dr. Mark Williams',
            specialization: 'Pediatrician',
            rating: 4.7,
            fee: 450,
          },
        ];

        setDoctors(staticDoctors);
        setFilteredDoctors(staticDoctors);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
        setDoctors([]);
        setFilteredDoctors([]);
      }
    };

    fetchDoctors();
  }, []);

  // Handle Search and Filter
  const handleSearch = (filters) => {
    const { searchTerm, specialization, rating, fee } = filters;

    let filtered = doctors;

    if (searchTerm) {
      filtered = filtered.filter((doctor) =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (specialization) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.specialization.toLowerCase() === specialization.toLowerCase()
      );
    }

    if (rating) {
      filtered = filtered.filter(
        (doctor) => doctor.rating >= parseFloat(rating)
      );
    }

    if (fee) {
      filtered = filtered.filter((doctor) => doctor.fee <= parseInt(fee));
    }

    setFilteredDoctors(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Available Doctors
      </h2>
      <SearchBar onSearch={handleSearch} />
      <div>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <p className="text-gray-600">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
