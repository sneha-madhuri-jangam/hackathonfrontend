import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from './App';
// import './index.css'; 

const Header = () => {
    const {login,username}=useContext(GlobalState)
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between">
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to={login?"/view":"/login"}>View</Link>
       

          <Link to="/login" className="text-white">Log In</Link>
          <Link to="/About" className="text-white">About</Link>
          <Link to="/Contact" className="text-white">Contact</Link>


          
          {/* <h1>{username}</h1> */}
        </div>
      </nav>
    </header>
  );
};
export default Header;