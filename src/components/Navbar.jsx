import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="bg-gradient-to-r from-[#F9A719] to-[#666666] p-4 text-white flex justify-between items-center shadow-md">
      <Link to="/" className="flex items-center">
        <img
          src="https://dronesolutions.co.zw/wp-content/uploads/2023/07/drone-solutions-white-background.png"
          alt="Logo"
          className="h-12 w-auto mr-4 rounded-lg transition-transform duration-200 hover:scale-105" // Adjust size and add hover effect
        />
        <h1 className="text-2xl font-bold">Drone Pilot Management System</h1>
      </Link>
      {user ? (
        <div className="space-x-6">
          <Link to="/dashboard" className="hover:underline hover:text-[#FFA500] transition duration-200">Dashboard</Link>
          <Link to="/pilots" className="hover:underline hover:text-[#FFA500] transition duration-200">Pilots</Link>
          <Link to="/flight-log" className="hover:underline hover:text-[#FFA500] transition duration-200">Flight Log</Link>
          <Link to="/certifications" className="hover:underline hover:text-[#FFA500] transition duration-200">Certifications</Link>
          <Link to="/scheduling" className="hover:underline hover:text-[#FFA500] transition duration-200">Scheduling</Link>
          <button 
            onClick={onLogout} 
            className="bg-[#F9A719] px-4 py-2 rounded hover:bg-[#FFA500] transition duration-200"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="space-x-6">
          <Link to="/login" className="hover:underline hover:text-[#FFA500] transition duration-200">Login</Link>
          <Link to="/register" className="hover:underline hover:text-[#FFA500] transition duration-200">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
