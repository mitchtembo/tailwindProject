import { useState, useEffect } from 'react'

function Certifications() {
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    setCertifications([
      { id: 1, pilotName: 'John Doe', type: 'Type A', expirationDate: '2023-12-31', status: 'Active' },
      { id: 2, pilotName: 'Jane Smith', type: 'Type B', expirationDate: '2023-06-30', status: 'Expiring' },
    ])
  }, [])

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Certifications</h2>
      <button className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Add New Certification
      </button>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Pilot Name</th>
            <th className="border border-gray-300 p-2 text-left">Certification Type</th>
            <th className="border border-gray-300 p-2 text-left">Expiration Date</th>
            <th className="border border-gray-300 p-2 text-left">Status</th>
            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map(cert => (
            <tr key={cert.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2">{cert.pilotName}</td>
              <td className="border border-gray-300 p-2">{cert.type}</td>
              <td className="border border-gray-300 p-2">{cert.expirationDate}</td>
              <td className="border border-gray-300 p-2">{cert.status}</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-200">
                  Edit
                </button>
                <button className="ml-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Certifications
