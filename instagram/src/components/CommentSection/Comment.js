/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentWrapper = styled.div``;

const CommentH4 = styled.h4`
  text-align: left;
  padding: 0 20px;
  margin: 10px 0;
  font-size: 14px;
  color: #262626;
`;

const Divider = styled.span`
  font-weight: normal;
  padding: 0 10px;
  text-align: left;
  color: #000000; 
`;


const Comment = ({ username, text }) => (
  <CommentWrapper>
    <CommentH4>{username}<Divider>{text}</Divider></CommentH4>
  </CommentWrapper>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
