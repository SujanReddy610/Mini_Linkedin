import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const { register } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, email, password, bio);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Bio (Optional)</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};
export default Register;
