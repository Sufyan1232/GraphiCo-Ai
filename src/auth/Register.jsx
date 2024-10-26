import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Ensure this path is correct based on your project structure
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import log from './log.mp4';
import "./Auth.css";
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isRegister, setIsRegister] = useState(true); // Toggle between register and login
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('User registered successfully!', {
          position: "top-right",
        });
        console.log("User registered successfully");
      } else {
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
        console.log("User logged in successfully Alhumdulliah");
      }
      navigate('/home');
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
        <h2 className='rh2'>{isRegister ? 'Sign Up to GraphiCo' : 'Sign In to GraphiCo'}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <div style={{display: "flex", flexDirection: "1 column"}}>
              <div>
                <label className='label'>Name</label><br/>
                <input className='input' type='text' value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label className='label'>User Name</label><br />
                <input className='input' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} required />
              </div>
              </div>
            </>
          )}
          <div>
            <label className='label'>Email</label><br />
            <input className='input1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className='label'>Password</label><br/>
            <input className='input1' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className='rbtn' type="submit" disabled={loading}>
            {loading ? (isRegister ? 'Registering...' : 'Logging in...') : (isRegister ? 'Create Account' : 'Sign In')}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <text className='already'>
          {isRegister ? "Already have an account?" : "Don't have an account?"} 
          <a href="#" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Sign In' : 'Sign Up'}
          </a>
        </text>
      </div>
    </div>
  );
}
