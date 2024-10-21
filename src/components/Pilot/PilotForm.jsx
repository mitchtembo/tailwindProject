import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'

const initialPilotState = {
  name: '',
  email: '',
  licenseNumber: '',
  certificates: [],
  flightHours: 0,
  experienceLevel: 'Beginner',
  contact: ''
}

const PilotForm = ({ onSubmit, initialData, onCancel }) => {
  const [pilot, setPilot] = useState(initialPilotState)

  useEffect(() => {
    if (initialData) {
      setPilot(initialData)
    } else {
      setPilot(initialPilotState)
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setPilot(prev => ({ ...prev, [name]: name === 'flightHours' ? parseInt(value) : value }))
  }

  const handleCertificatesChange = (e) => {
    const certificates = e.target.value.split(',').map(cert => cert.trim())
    setPilot(prev => ({ ...prev, certificates }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(pilot)
    setPilot(initialPilotState)
  }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{initialData ? 'Edit Pilot' : 'Add New Pilot'}</h2>
        <button type="button" onClick={onCancel} className="text-gray-500 hover:text-gray-700">
          <FaTimes size={24} />
        </button>
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          name="name"
          value={pilot.name}
          onChange={handleChange}
          placeholder="Pilot Name"
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          name="email"
          type="email"
          value={pilot.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          name="licenseNumber"
          value={pilot.licenseNumber}
          onChange={handleChange}
          placeholder="License Number"
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          name="certificates"
          value={pilot.certificates.join(', ')}
          onChange={handleCertificatesChange}
          placeholder="Certificates (comma-separated)"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          type="number"
          name="flightHours"
          value={pilot.flightHours}
          onChange={handleChange}
          placeholder="Flight Hours"
          required
        />
      </div>
      <div className="mb-4">
        <select
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          name="experienceLevel"
          value={pilot.experienceLevel}
          onChange={handleChange}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          name="contact"
          value={pilot.contact}
          onChange={handleChange}
          placeholder="Contact Information"
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {initialData ? 'Update' : 'Add'} Pilot
        </button>
      </div>
    </form>
  )
}

export default PilotForm