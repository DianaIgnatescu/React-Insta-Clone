import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import styled from 'styled-components';
import CameraIg from '../../assets/camera-ig.png';
import LogoIg from '../../assets/insta-logo.svg';
import Compass from '../../assets/compass.png';
import Heart from '../../assets/heart.png';
import User from '../../assets/user.png';

const SearchBarWrapper = styled.header`
  border-bottom: 1px solid #e9e9e9;
  max-width: 100%;
  background: #FFFFFF;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 880px;
  height: 40px;
  align-items: center;
  background: #FFFFFF;
`;

const LogoHeader = styled.div`
  display: flex;
  align-items: center;
`;

const LogoCamera = styled.img`
  width: 25px;
  height: 25px;
  padding: 10px 20px 10px 0;
  border-right: 1px solid #262626;
  margin: 0 10px 10px 0;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 30px;
  padding: 10px 10px;
  align-self: bottom;
  margin: 10px 10px 10px 0;
`;

const SearchInput = styled.input`
  height: 30px;
  padding: 0 10px;
  width: 200px;
  border: 1px solid #e9e9e9;
  background: #FAFAFA;
  border-radius: 3px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    text-align: center;
    font-size: 16px;
    color: #999999;
    font-weight: normal;
  }
`;

const SearchResults = styled.div`
  text-align: center;
  font-size: 16px;
  color: #999999;
  font-weight: normal;
  padding: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
`;

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
  <SearchBarWrapper>
    <Header>
      <LogoHeader>
        <LogoCamera src={CameraIg} alt="camera-ig" />
        <LogoImage src={LogoIg} alt="logo-ig" />
      </LogoHeader>
      <form onSubmit={event => handleSubmit(event, filterByUsername, usernames)}>
        <SearchInput placeholder="Search..." />
      </form>
      <SocialIcons>
        <Icon src={Compass} alt="compass" />
        <Icon src={Heart} alt="heart" />
        <Icon src={User} alt="user" />
      </SocialIcons>
    </Header>
    {currentFilter && !resultNotFound ? <SearchResults>{`Filtered results for ${currentFilter}`}</SearchResults> : null}
    {resultNotFound ? <SearchResults>{`No results matched ${currentFilter}`}</SearchResults> : null}
  </SearchBarWrapper>
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
