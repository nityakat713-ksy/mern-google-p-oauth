import { useLocation } from 'react-router-dom';

export default function Login() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const error = params.get('error');

  const startGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="page login-page">
      <div className="card login-card">
        <h1>Welcome</h1>
        <p>Sign in to continue to your Dashboard.</p>

        {error && (
          <div className="error">
            Authentication failed. Please try again.
          </div>
        )}

        <button className="google-button" onClick={startGoogleLogin}>
  <span className="google-icon">G</span>
  Continue with Google
</button>
      </div>
    </div>
  );
}