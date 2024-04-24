import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../Styles/Header.css';
import {ReactComponent as HomeIcon} from '../Art/homeIcon.svg';
import color from '../Art/color.png';
import avatar from '../Art/avatar.png';
import logo from '../Art/DDN logo.png';


  const Header = ({ user, setUser }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
  
    const username = "Username";

    const navigate = useNavigate();

    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };

    const handleDropdownChange = (e, option) => {
      e.preventDefault();
      console.log(option);

      setDropdownVisible(false);
      if (option == "profile"){
        navigate("/profile");
      } else if (option == "logout") {
        setUser(null);
        navigate("/home");
      }
    };

    const ProfileSection = () => {
      if (user) {
        return (
          <div className="right-header header-links">
            <Link to="/profile" className='right-header'>
              <img src={avatar} className="profile-picture" />
              <div className="username">{user.username}</div>
            </Link>
            <div className="dropdown-container">
              <button className="profile-dropdown" onClick={toggleDropdown}>
                <img src={color} />
              </button>

              {isDropdownVisible && (
                <div className="dropdown-box">
                  <div className="dropdown">
                    <Link to="/profile" className="dropdown-button" onClick={(e) => handleDropdownChange(e, 'profile')}>
                      Profile
                    </Link>
                    <Link className="dropdown-button" onClick={(e) => handleDropdownChange(e, 'logout')}>
                      Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      } else {
        return (
          <div className="right-header header-links">
            <Link to="/login" className="header-link">Login</Link>
            <Link to="/signup" className="header-link">Sign Up</Link>
          </div>
        );
      }
    };

    const options = ["Profile", "Logout"];

    return (
      <header className='header'>
        <Link className="left-header" to='/'>
          <img src={logo} className="logo"/>
          <div className="site-name">D&D Nearby</div>
        </Link>
        
        <div className="right-header">
          <Link className="home-button header-link home-link" to="/">
            <HomeIcon />
          </Link>

          <ProfileSection />

        </div>
        
      </header>
    )
  };


export default Header;
