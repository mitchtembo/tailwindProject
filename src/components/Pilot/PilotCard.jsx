import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const PilotCard = ({ pilot, onEdit, onRemove }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-2">{pilot.name}</h2>
      <p className="text-gray-600 mb-1"><strong>Email:</strong> {pilot.email}</p>
      <p className="text-gray-600 mb-1"><strong>License Number:</strong> {pilot.licenseNumber}</p>
      <p className="text-gray-600 mb-1"><strong>Certificates:</strong> {pilot.certificates.join(', ')}</p>
      <p className="text-gray-600 mb-1"><strong>Flight Hours:</strong> {pilot.flightHours}</p>
      <p className="text-gray-600 mb-1"><strong>Experience Level:</strong> {pilot.experienceLevel}</p>
      <p className="text-gray-600 mb-3"><strong>Contact:</strong> {pilot.contact}</p>
      <div className="flex justify-end">
        <button 
          onClick={onEdit}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2 flex items-center"
        >
          <FaEdit className="mr-1" /> Edit
        </button>
        <button 
          onClick={onRemove}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center"
        >
          <FaTrash className="mr-1" /> Remove
        </button>
      </div>
    </div>
  )
}

export default PilotCard