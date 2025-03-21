import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [rating, setRating] = useState('');
  const [fee, setFee] = useState('');

  const handleSearch = () => {
    onSearch({ searchTerm, specialization, rating, fee });
  };

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search Term */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />

        {/* Specialization */}
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        >
          <option value="">Select Specialization</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Pediatrician">Pediatrician</option>
        </select>

        {/* Rating */}
        <input
          type="number"
          placeholder="Min Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />

        {/* Fee */}
        <input
          type="number"
          placeholder="Max Fee"
          value={fee}
          onChange={(e) => setFee(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
