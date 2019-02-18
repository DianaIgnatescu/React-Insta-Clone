import React from 'react';
import Comment from './Comment';

const CommentSection = ({ comments }) => (
  <div>
    {comments.map(({ username, text }) => (
      <Comment username={username} text={text} />
    ))}
  </div>
);

export default CommentSection;
