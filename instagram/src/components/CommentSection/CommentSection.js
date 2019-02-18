import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentSection = ({ comments }) => (
  <div>
    {comments.map(({ username, text }) => (
      <Comment key={`${username}-${text}`} username={username} text={text} />
    ))}
    <div>
      <input placeholder="Add comment..." />
      <p>...</p>
    </div>
  </div>
);

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string,
  })).isRequired,
};

export default CommentSection;
