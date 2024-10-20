import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white flex justify-between items-center shadow-md">
      <img
        src="https://dronesolutions.co.zw/wp-content/uploads/2023/07/drone-solutions-white-background.png"
        alt="Logo"
        className="h-10 w-auto mr-4"
      />
      <h1 className="text-2xl font-bold">Drone Pilot Management System</h1>
      {user ? (
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/pilots" className="hover:underline">Pilots</Link>
          <Link to="/flight-log" className="hover:underline">Flight Log</Link>
          <Link to="/certifications" className="hover:underline">Certifications</Link>
          <Link to="/scheduling" className="hover:underline">Scheduling</Link>
          <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">Logout</button>
        </div>
      ) : (
        <div className="space-x-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
