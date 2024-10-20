import { useState, useEffect } from 'react';

function Scheduling() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setMissions([
      { id: 1, date: '2023-05-10', time: '09:00', missionType: 'Surveillance', assignedPilot: 'John Doe' },
      { id: 2, date: '2023-05-12', time: '14:00', missionType: 'Delivery', assignedPilot: 'Jane Smith' },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Mission Scheduling</h2>
      <button className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Schedule New Mission
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Mission Type</th>
              <th className="py-2 px-4 border-b">Assigned Pilot</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{mission.date}</td>
                <td className="py-2 px-4 border-b">{mission.time}</td>
                <td className="py-2 px-4 border-b">{mission.missionType}</td>
                <td className="py-2 px-4 border-b">{mission.assignedPilot}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scheduling;
