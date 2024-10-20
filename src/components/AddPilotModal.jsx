import React, { useState } from 'react';

const certificationsList = [
  'Type A',
  'Type B',
  'Type C',
  'Type D',
  'Type E'
];

const AddPilotModal = ({ isOpen, onClose, onAddPilot }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCertification, setSelectedCertification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPilot = {
      id: Date.now(), // Simple unique ID generation
      name,
      email,
      certifications: [selectedCertification], // Store as an array
    };
    onAddPilot(newPilot);
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // Don't render the modal if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Add New Pilot</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="border rounded w-full p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="border rounded w-full p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Certification</label>
            <select
              value={selectedCertification}
              onChange={(e) => setSelectedCertification(e.target.value)}
              className="border rounded w-full p-2"
              required
            >
              <option value="" disabled>Select a certification</option>
              {certificationsList.map((cert, index) => (
                <option key={index} value={cert}>
                  {cert}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between">
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Pilot</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPilotModal;
