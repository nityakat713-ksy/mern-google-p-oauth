import { useEffect, useState } from 'react';
import { getDashboardData, logout } from '../api';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getDashboardData()
      .then(res => {
        setUser(res.data.user);
      })
      .catch(() => {
        setError('Failed to load dashboard data.');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/login';
    } catch {
      setError('Logout failed. Please try again.');
    }
  };

  if (loading) {
    return <div className="page"><div className="loading">Loading dashboard...</div></div>;
  }

  if (!user) {
    return <div className="page"><div className="error">No user data available.</div></div>;
  }

  return (
    <div className="page dashboard-page">
      <div className="card dashboard-card">
        <img
          className="profile-picture"
          src={user.profilePicture}
          alt={user.name}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <div className="status-message">
   Logged in securely using Google OAuth
</div>

        {error && <div className="error">{error}</div>}

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}