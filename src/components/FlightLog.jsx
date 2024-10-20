import { useState, useEffect } from 'react';

function FlightLog() {
  const [flightLogs, setFlightLogs] = useState([]);

  useEffect(() => {
    setFlightLogs([
      { id: 1, date: '2023-05-01', duration: '2h 30m', missionType: 'Surveillance', pilot: 'John Doe' },
      { id: 2, date: '2023-05-03', duration: '1h 45m', missionType: 'Delivery', pilot: 'Jane Smith' },
    ]);
  }, []);

  return (
    <div className="flight-log max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Flight Log</h2>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4">Add New Flight Log</button>
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Duration</th>
            <th className="px-4 py-2">Mission Type</th>
            <th className="px-4 py-2">Pilot</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {flightLogs.map(log => (
            <tr key={log.id} className="border-t">
              <td className="px-4 py-2">{log.date}</td>
              <td className="px-4 py-2">{log.duration}</td>
              <td className="px-4 py-2">{log.missionType}</td>
              <td className="px-4 py-2">{log.pilot}</td>
              <td className="px-4 py-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightLog;
