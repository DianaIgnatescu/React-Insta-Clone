import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = ({
  comments, username, thumbnailUrl, imageUrl, likes, timestamp, addNewComment, postId,
}) => (
  <div className="post-container">
    <div className="user-container">
      <img className="thumbnail" src={thumbnailUrl} alt="user-thumbnail" />
      <h3>{username}</h3>
    </div>

    <img className="image" src={imageUrl} alt="insta" />

    <div className="comment-icons">
      <i className="icon far fa-heart" />
      <i className="icon far fa-comment" />
    </div>

    <p>{`${likes} likes`}</p>

    {comments.length ? <CommentSection comments={comments} addNewComment={addNewComment} postId={postId} /> : null}

    <p className="timestamp">{timestamp}</p>
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
  addNewComment: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};

export default PostContainer;
