// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext.jsx';

// const Header = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <header className="header">
//       <Link to="/" className="header-logo">Mini-LinkedIn</Link>
//       <nav className="header-nav">
//         {user ? (
//           <>
//             <Link to={`/profile/${user._id}`} className="nav-link">
//               {user.name}
//             </Link>
//             <button onClick={logout} className="btn btn-danger">
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link to="/auth" className="btn btn-primary">
//             Login
//           </Link>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;








import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="app-header">
      <nav className="container header-content">
        <Link to="/" className="logo-link">
          Mini-LinkedIn
        </Link>
        {user ? (
          <ul className="user-nav-links">
            <li className="nav-item">
              <Link to={`/profile/${user._id}`} className="nav-link">
                {user.name}
              </Link>
            </li>
            <li className="nav-item">
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <Link to="/auth" className="nav-link">
            Login/Register
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;