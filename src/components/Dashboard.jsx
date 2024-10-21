import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import from chart.js
import { FaUsers, FaCertificate, FaRocket } from 'react-icons/fa';

// Register Chart.js components
Chart.register(...registerables);

function Dashboard({ user }) {
  const [stats, setStats] = useState({
    activePilots: 0,
    expiringCertifications: 0,
    scheduledMissions: 0,
  });

  const chartData1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Scheduled Missions',
        data: [2, 3, 5, 1, 4], // Replace with your dynamic data
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartData2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Completed Missions',
        data: [1, 2, 4, 2, 5], // Replace with your dynamic data
        fill: false,
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom height
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    setStats({
      activePilots: 15,
      expiringCertifications: 3,
      scheduledMissions: 7,
    });
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-xl font-bold mb-6">Welcome, {user.email}!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <FaUsers size={30} className="text-yellow-500 mb-2" />
    <h3 className="text-lg font-semibold">Active Pilots</h3>
    <p className="text-2xl font-bold">{stats.activePilots}</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <FaCertificate size={30} className="text-yellow-500 mb-2" />
    <h3 className="text-lg font-semibold">Expiring Certifications</h3>
    <p className="text-2xl font-bold">{stats.expiringCertifications}</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-lg">
    <FaRocket size={30} className="text-yellow-500 mb-2" />
    <h3 className="text-lg font-semibold">Scheduled Missions</h3>
    <p className="text-2xl font-bold">{stats.scheduledMissions}</p>
  </div>
</div>

      {/* Render the Line charts side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Scheduled Missions</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <Line data={chartData1} options={options} />
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Completed Missions</h3>
          <div style={{ height: '300px', width: '100%' }}>
            <Line data={chartData2} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
