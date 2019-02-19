import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

const handleSubmit = (event, postId, addNewComment) => {
  const value = event.target.querySelector('input').value;
  event.preventDefault();
  if (!value) {
    return;
  }
  addNewComment(postId, value);
  event.target.querySelector('input').value = '';
};

const CommentSection = ({ comments, postId, addNewComment, timestamp }) => (
  <div>
    {comments.map(({ username, text }) => (
      <Comment key={`${username}-${text}`} username={username} text={text} />
    ))}
    <p className="timestamp">{timestamp}</p>
    <div className="add-comment">
      <form onSubmit={event => handleSubmit(event, postId, addNewComment)}>
        <input placeholder="Add comment..." />
      </form>
      <p>...</p>
    </div>
  </div>
);

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string,
  })).isRequired,
  postId: PropTypes.number.isRequired,
  addNewComment: PropTypes.func.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default CommentSection;
