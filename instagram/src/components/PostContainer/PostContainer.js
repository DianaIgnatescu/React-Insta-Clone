import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({
  comments, username, thumbnailUrl, imageUrl, likes, timestamp,
}) => (
  <div className="post-container">
    <div className="user-container">
      <p>{username}</p>
      <img src={thumbnailUrl} alt="user-thumbnail" />
    </div>
    <img src={imageUrl} alt="insta" />
    <p>{`${likes} likes`}</p>
    <p>{timestamp}</p>
    {comments.length ? <CommentSection comments={comments} /> : null}

  </div>
);

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default PostContainer;
