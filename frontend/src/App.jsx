// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext.js';
// import Header from './components/Header.js';
// import HomePage from './pages/HomePage.js';
// import RegisterLoginPage from './pages/RegisterLoginPage.js';
// import ProfilePage from './pages/ProfilePage.js';
// import PrivateRoute from './components/PrivateRoute.js';
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <div className="app-container">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
//               <Route path="/profile/:id" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
//               <Route path="/auth" element={<RegisterLoginPage />} />
//             </Routes>
//           </div>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext.jsx';
// import Header from './components/Header.jsx';
// import HomePage from './pages/HomePage.jsx';
// import RegisterLoginPage from './pages/RegisterLoginPage.jsx';
// import ProfilePage from './pages/ProfilePage.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx'; // <<< THIS LINE WAS CHANGED
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <div className="app-container">
//           <Header />
//           <div className="container">
//             <Routes>
//               <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
//               <Route path="/profile/:id" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
//               <Route path="/auth" element={<RegisterLoginPage />} />
//             </Routes>
//           </div>
//         </div>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;









// import React, { useContext } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { AuthContext } from './context/AuthContext.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';
// import HomePage from './pages/HomePage.jsx';
// import RegisterLoginPage from './pages/RegisterLoginPage.jsx';
// import Header from './components/Header.jsx';
// import ProfilePage from './pages/ProfilePage.jsx';

// function App() {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <Header />
//       <main className="container mt-4">
//         <Routes>
//           <Route path="/auth" element={user ? <Navigate to="/" /> : <RegisterLoginPage />} />
//           <Route path="/" element={<PrivateRoute element={HomePage} />} />
//           <Route path="/profile/:id" element={<PrivateRoute element={ProfilePage} />} />
//         </Routes>
//       </main>
//     </>
//   );
// }

// export default App;

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