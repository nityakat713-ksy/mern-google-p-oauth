import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { authStatus } from '../api';

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    authStatus()
      .then(res => {
        if (!isMounted) return;
        setAuthenticated(res.data.authenticated);
      })
      .catch(() => {
        if (!isMounted) return;
        setAuthenticated(false);
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <div className="page"><div className="loading">Authenticating...</div></div>;
  }

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}