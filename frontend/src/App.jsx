import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import HomePage from './pages/HomePage.jsx';
import RegisterLoginPage from './pages/RegisterLoginPage.jsx';
import Header from './components/Header.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <>
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route path="/auth" element={user ? <Navigate to="/" /> : <RegisterLoginPage />} />
          <Route path="/" element={<PrivateRoute element={HomePage} />} />
          <Route path="/profile/:id" element={<PrivateRoute element={ProfilePage} />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
