import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'; // Import Firebase auth

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
  const [user, setUser] = useState(null); // Authenticated user
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Track Firebase Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut();
    setUser(null); // Clear user state
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            {/* If logged in, redirect to dashboard; otherwise, show login */}
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />

            {/* If logged in, redirect to dashboard; otherwise, show registration */}
            <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register />} />

            {/* Protected routes */}
            <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
            <Route path="/pilots" element={user ? <PilotManagement /> : <Navigate to="/login" />} />
            <Route path="/flight-log" element={user ? <FlightLog /> : <Navigate to="/login" />} />
            <Route path="/certifications" element={user ? <Certifications /> : <Navigate to="/login" />} />
            <Route path="/scheduling" element={user ? <Scheduling /> : <Navigate to="/login" />} />

            {/* Default redirect to dashboard */}
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
