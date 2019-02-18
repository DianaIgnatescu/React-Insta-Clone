import React from 'react';
import CameraIg from '../../assets/camera-ig.png';
import LogoIg from '../../assets/insta-logo.svg';
import Compass from '../../assets/compass.png';
import Heart from '../../assets/heart.png';
import User from '../../assets/user.png';
import './SearchBar.css';

const SearchBar = () => (
  <div className="search-container">
    <div className="search-bar">
      <div className="logo">
        <img className="camera" src={CameraIg} alt="camera-ig" />
        <img className="insta-logo" src={LogoIg} alt="logo-ig" />
      </div>
      <input className="search" placeholder="Search..." />
      <div className="social-icons">
        <img className="icon compass" src={Compass} alt="compass" />
        <img className="icon heart" src={Heart} alt="heart" />
        <img className="icon user" src={User} alt="user" />
      </div>
    </div>

  </div>
);

export default SearchBar;
