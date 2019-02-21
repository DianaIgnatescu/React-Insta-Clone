import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Comment from './Comment';
import './CommentSection.css';

const TimestampP = styled.p`
  color: #999999;
  font-weight: normal;
  font-size: 14px;
  padding: 0 20px;
  text-align: left;
`;

const AddComment = styled.div`
  border-top: 1px solid #e9e9e9;
  margin: 20px 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    // padding: 20px 0;
    font-size: 16px;
    font-weight: 800;
  }
`;

const CommentInput = styled.input`
  width: 560px;
  border-bottom: 1px solid lightgrey;
  border: none;
  padding: 20px 0;
  align-self: left;
  font-size: 14px;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 14px;
    color: #999999;
    font-weight: 500;
  }
`;

const handleSubmit = (event, postId, addNewComment) => {
  const { value } = event.target.querySelector('input');
  event.preventDefault();
  if (!value) {
    return;
  }
  addNewComment(postId, value);
  // eslint-disable-next-line no-param-reassign
  event.target.querySelector('input').value = '';
};

const CommentSection = ({
  comments, postId, addNewComment, timestamp,
}) => (
  <div>
    {comments.map(({ username, text }) => (
      <Comment key={`${username}-${text}`} username={username} text={text} />
    ))}
    <TimestampP>{timestamp}</TimestampP>
    <AddComment>
      <form onSubmit={event => handleSubmit(event, postId, addNewComment)}>
        <CommentInput placeholder="Add comment..." />
      </form>
      <p>...</p>
    </AddComment>
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
