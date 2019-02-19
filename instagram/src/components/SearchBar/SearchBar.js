import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import CameraIg from '../../assets/camera-ig.png';
import LogoIg from '../../assets/insta-logo.svg';
import Compass from '../../assets/compass.png';
import Heart from '../../assets/heart.png';
import User from '../../assets/user.png';
import './SearchBar.css';

const fuzzySearch = (searchTerm, list) => {
  const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      'title',
      'author.firstName',
    ],
  };
  const fuse = new Fuse(list, options); // "list" is the item array
  const results = fuse.search(searchTerm);
  const topResultIndex = results[0];
  const topResult = list[topResultIndex];
  return topResult;
};


const handleSubmit = (event, filterByUsername, usernames) => {
  const { value } = event.target.querySelector('input');
  event.preventDefault();
  if (!value) {
    return;
  }
  const fuzzyValue = fuzzySearch(value, usernames);
  if (!fuzzyValue) {
    filterByUsername(value, true);
  } else {
    filterByUsername(fuzzyValue, false);
  }
  // eslint-disable-next-line no-param-reassign
  event.target.querySelector('input').value = '';
};

const SearchBar = ({
  filterByUsername, usernames, currentFilter, resultNotFound,
}) => (
  <div className="search-container">
    <div className="search-bar">
      <div className="logo">
        <img className="camera" src={CameraIg} alt="camera-ig" />
        <img className="insta-logo" src={LogoIg} alt="logo-ig" />
      </div>
      <form onSubmit={event => handleSubmit(event, filterByUsername, usernames)}>
        <input className="search" placeholder="Search..." />
      </form>
      <div className="social-icons">
        <img className="icon compass" src={Compass} alt="compass" />
        <img className="icon heart" src={Heart} alt="heart" />
        <img className="icon user" src={User} alt="user" />
      </div>
    </div>
    {currentFilter && !resultNotFound ? <div className="search-results">{`Filtered results for ${currentFilter}`}</div> : null}
    {resultNotFound ? <div className="search-results">{`No results matched ${currentFilter}`}</div> : null}
  </div>
);

SearchBar.propTypes = {
  filterByUsername: PropTypes.func.isRequired,
  usernames: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentFilter: PropTypes.string,
  resultNotFound: PropTypes.bool.isRequired,
};

SearchBar.defaultProps = {
  currentFilter: '',
};

export default SearchBar;
