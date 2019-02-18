import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

const CommentSection = ({ comments }) => (
  <div>
    {comments.map(({ username, text, timestamp }) => (
      <Comment key={`${username}-${text}`} username={username} text={text} timestamp={timestamp} />
    ))}
    <div className="add-comment">
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
