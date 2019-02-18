import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ username, text }) => (
  <div>
    <h3>{username}<span>{text}</span></h3>
  </div>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
