import React, { useState, useContext } from 'react';
import '../../../styles/components/LoginSignup.scss';
import { loginUser, createUser } from '../../../utilities/ApiService';
import SessionContext from '../../context/session.context';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';

const LoginSignup = () => {
  const {
    setUserData,
    setAccessToken,
    setIsUserLoading,
    setUserError,
    setAuthChecked
  } = useContext(SessionContext);
  const navigate = useNavigate();

  const [formType, setFormType] = useState('login');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userErrors, setUserErrors] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserErrors([]);

    if (!email || !password || (formType === 'signup' && (!firstname || !lastname))) {
      return setUserErrors(['Please fill out all fields']);
    }

    if (email.length < 6 || !email.includes('@')) {
      return setUserErrors(['Something is wrong with your email']);
    }

    setIsUserLoading(true);

    try {
      if (formType === 'login') {
        const res = await loginUser({ email_address: email, password })
        if (res.authenticated) {
          setUserData(res.user);
          setAccessToken(res.session_token);
          setAuthChecked(true)
          navigate('/');
        } else {
          window.location.reload();
          setUserError(true);
        }
      } else {
        const res = await createUser({
          firstname,
          lastname,
          email_address: email,
          password,
        });

        if (res.status === 'fulfilled') {
          setUserData(res.user);
          setAccessToken(res.session_token);
          navigate('/')
        } else {
          setUserError(true);
        }
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setUserError(true);
    } finally {
      setIsUserLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{formType === 'login' ? 'Login' : 'Sign Up'}</h2>

      {userErrors.length > 0 && (
        <div className="error">{userErrors.map((e, i) => <p key={i}>{e}</p>)}</div>
      )}

      {formType === 'signup' && (
        <div className="sign-up">
          <div className="firstname">
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
          <div className="lastname">
            <label htmlFor="lastname">
              <i className="bi bi-person"></i> Lastname:
            </label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
      )}

      <div className="login">
        <div className="email">
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
        <div className="password">
          <label htmlFor="password">
            <i className="bi bi-lock-fill"></i> Password:
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
