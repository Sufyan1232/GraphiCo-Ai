import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Make sure this path is correct based on where you saved firebase.js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import log from './log.mp4';
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Logged in successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("User logged in successfully");
      // You can redirect the user to another page or perform any other action here
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ToastContainer />
      <div style={{ flexBasis: '40%', height: '100vh' }}>
        <video 
          src={log} 
          controls 
          autoPlay 
          loop 
          muted 
          style={{ 
            height: '100%', 
            width: '100%', 
            objectFit: 'cover' 
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='right' style={{ flexBasis: '60%' }}>
        <h2 className='rh2'> Sign In to GraphiCo</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label className='label'>Email</label><br />
            <input className='input1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className='label'>Password</label><br/>
            <input className='input1' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className='rbtn' type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <text className='already'>Don't have an account? <a href='/register'>Sign Up</a></text>
      </div>
    </div>
  );
}

export default Login;
