import React, { useState } from 'react';
import '../../../styles/components/LoginSignup.scss';

const LoginSignup = () => {
  const [formType, setFormType] = useState('login'); // 'login' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formType === 'login') {
      console.log('Logging in with:', email, password);
    } else {
      console.log('Signing up with:', firstname, lastname, email, password);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formType === 'login' ? 'Login' : 'Sign Up'}</h2>

      {formType === 'signup' && (
        <div className='sign-up'>
          <div className='firstname'>
            <label htmlFor="firstname">
                <i className="bi bi-person"></i> Firstname:
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className='lastname'>
            <label htmlFor="lastname"><i className="bi bi-person"></i>
             Lastname:</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className='login'>
        <div className='email'>
          <label htmlFor="email">
            <i className="bi bi-envelope"></i> Email:
            </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='password'>
            <label htmlFor="password">
                <i className="bi bi-lock-fill"></i>
                Password:
            </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button type="submit">
        {formType === 'login' ? 'Login' : 'Sign Up'}
      </button>

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setFormType(formType === 'login' ? 'signup' : 'login')}
      >
        Switch to {formType === 'login' ? 'Sign Up' : 'Login'}
      </button>
    </form>
  );
};

export default LoginSignup;
