/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainerWrapper = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  margin: 60px auto;
  max-width: 640px;
  background: #FFFFFF;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserThumbnail = styled.img`
  border-radius: 50%;
  max-width: 30px;
  height: 30px;
  padding: 20px;
`;

export const UsernameH3 = styled.h3`
  font-size: 14px;
  font-weight: bold;

  ${props => props.larger && css`
    font-size: 16px;
  `};
`;

const CommentIcons = styled.div`
  display: flex;
  padding: 5px 10px;
  margin-top: 10px;
`;

const CommentLikes = styled.p`
  text-align: left;
  font-weight: bold;
  color: #262626;
  padding: 0 20px;
  margin: 0;
  font-size: 14px;
`;

const PostContainer = ({
  /* eslint-disable max-len */
  comments, username, thumbnailUrl, imageUrl, likes, timestamp, addNewComment, likedPosts, addLike, postId,
}) => (
  <PostContainerWrapper>
    <UserContainer>
      <UserThumbnail src={thumbnailUrl} alt="user-thumbnail" />
      <UsernameH3 larger>{username}</UsernameH3>
    </UserContainer>

    <img className="image" src={imageUrl} alt="insta" />

    <CommentIcons>
      {likedPosts.includes(postId)
        ? <i className="icon fas fa-heart" onClick={() => addLike(postId)} />
        : <i className="icon far fa-heart" onClick={() => addLike(postId)} />}
      <i className="icon far fa-comment" />
    </CommentIcons>

    <CommentLikes>{`${likes} likes`}</CommentLikes>

    {comments.length ? <CommentSection comments={comments} addNewComment={addNewComment} postId={postId} timestamp={timestamp} /> : null}
  </PostContainerWrapper>

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
  likedPosts: PropTypes.arrayOf(PropTypes.number).isRequired,
  addLike: PropTypes.func.isRequired,
};

export default PostContainer;
