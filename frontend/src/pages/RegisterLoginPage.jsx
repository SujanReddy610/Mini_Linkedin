import React, { useState } from 'react';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';

const RegisterLoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="card login-register-card">
      <div className="tab-buttons">
        <button
          className={`tab-btn ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`tab-btn ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default RegisterLoginPage;