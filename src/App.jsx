import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PilotManagement from './components/PilotManagement';
import FlightLog from './components/FlightLog';
import Certifications from './components/Certifications';
import Scheduling from './components/Scheduling';
import Navbar from './components/Navbar';
import Modal from './components/Modal'; // Import Modal
import TravelConsiderationsInfo from './components/TravelConsiderationsInfo'; // Import Travel Considerations Info

function App() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleLogin = (userData) => {
    setUser(userData);
    setIsModalOpen(true); // Open modal on successful login
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />} />
            <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
            <Route path="/pilots" element={user ? <PilotManagement /> : <Navigate to="/login" />} />
            <Route path="/flight-log" element={user ? <FlightLog /> : <Navigate to="/login" />} />
            <Route path="/certifications" element={user ? <Certifications /> : <Navigate to="/login" />} />
            <Route path="/scheduling" element={user ? <Scheduling /> : <Navigate to="/login" />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
      </div>

      {/* Modal for Travel Considerations */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TravelConsiderationsInfo />
      </Modal>
    </Router>
  );
}

export default App;
