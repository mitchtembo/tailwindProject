import { useState, useEffect } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import AddPilotModal from './AddPilotModal';
// import AddPilotModal from './AddPilotModal'; // Import the modal component

function PilotManagement() {
  const [pilots, setPilots] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setPilots([
      { id: 1, name: 'John Doe', email: 'john@example.com', certifications: ['Type A', 'Type B'] },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', certifications: ['Type A'] },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', certifications: ['Type B'] },
    ]);
  }, []);

  const filteredPilots = pilots.filter(pilot =>
    pilot.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pilot.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPilot = (newPilot) => {
    setPilots([...pilots, newPilot]); // Add new pilot to the list
  };

  return (
    <div className="pilot-management max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Pilot Management</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border rounded-lg p-2 mr-2 flex-grow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          onClick={() => setIsModalOpen(true)} // Open the modal
        >
          <FaPlus className="mr-2" /> Add New Pilot
        </button>
      </div>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Certifications</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPilots.length > 0 ? (
            filteredPilots.map(pilot => (
              <tr key={pilot.id} className="border-t">
                <td className="px-4 py-2">{pilot.name}</td>
                <td className="px-4 py-2">{pilot.email}</td>
                <td className="px-4 py-2">{pilot.certifications.join(', ')}</td>
                <td className="px-4 py-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-2">No pilots found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add Pilot Modal */}
      <AddPilotModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPilot={handleAddPilot}
      />
      {/* <AddPilotModal /> */}
    </div>
  );
}

export default PilotManagement;
