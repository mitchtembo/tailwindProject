import React, { useState, useEffect } from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa'
import PilotCard from './Pilot/PilotCard'
import PilotForm from './Pilot/PilotForm'

const initialPilots = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    licenseNumber: "DRL123456",
    certificates: ["Basic", "Advanced"],
    flightHours: 150,
    experienceLevel: "Intermediate",
    contact: "john.doe@email.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    licenseNumber: "DRL789012",
    certificates: ["Basic", "Night Flying"],
    flightHours: 80,
    experienceLevel: "Beginner",
    contact: "jane.smith@email.com"
  }
]

const PilotManagement = () => {
  const [pilots, setPilots] = useState(initialPilots)
  const [editingPilot, setEditingPilot] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPilots = pilots.filter(pilot =>
    pilot.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pilot.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addPilot = (pilot) => {
    setPilots([...pilots, { ...pilot, id: Date.now() }])
    setIsModalOpen(false)
  }

  const updatePilot = (updatedPilot) => {
    setPilots(pilots.map(p => p.id === updatedPilot.id ? updatedPilot : p))
    setEditingPilot(null)
    setIsModalOpen(false)
  }

  const removePilot = (id) => {
    setPilots(pilots.filter(p => p.id !== id))
  }

  const startEditing = (pilot) => {
    setEditingPilot(pilot)
    setIsModalOpen(true)
  }

  return (
    <div className="pilot-management max-w-5xl mx-auto p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Pilot Management</h2>
      <div className="flex items-center mb-4">
        <div className="relative flex-grow mr-2">
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full border rounded-lg p-2 pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus className="mr-2" /> Add New Pilot
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPilots.map(pilot => (
          <PilotCard 
            key={pilot.id} 
            pilot={pilot} 
            onEdit={() => startEditing(pilot)}
            onRemove={() => removePilot(pilot.id)}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <PilotForm 
              onSubmit={editingPilot ? updatePilot : addPilot} 
              initialData={editingPilot}
              onCancel={() => {
                setEditingPilot(null)
                setIsModalOpen(false)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PilotManagement