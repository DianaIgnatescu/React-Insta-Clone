import React from 'react';
import PropTypes from 'prop-types';
import CameraIg from '../../assets/camera-ig.png';
import LogoIg from '../../assets/insta-logo.svg';
import Compass from '../../assets/compass.png';
import Heart from '../../assets/heart.png';
import User from '../../assets/user.png';
import './SearchBar.css';


const handleSubmit = (event, filterByUsername) => {
  const value = event.target.querySelector('input').value;
  event.preventDefault();
  if (!value) {
    return;
  }
  filterByUsername(value);
  event.target.querySelector('input').value = '';
};

const SearchBar = ({ filterByUsername }) => (
  <div className="search-container">
    <div className="search-bar">
      <div className="logo">
        <img className="camera" src={CameraIg} alt="camera-ig" />
        <img className="insta-logo" src={LogoIg} alt="logo-ig" />
      </div>
      <form onSubmit={event => handleSubmit(event, filterByUsername)}>
        <input className="search" placeholder="Search..." />
      </form>
      <div className="social-icons">
        <img className="icon compass" src={Compass} alt="compass" />
        <img className="icon heart" src={Heart} alt="heart" />
        <img className="icon user" src={User} alt="user" />
      </div>
    </div>

  </div>
);

SearchBar.propTypes = {
  filterByUsername: PropTypes.func.isRequired,
};

export default SearchBar;
