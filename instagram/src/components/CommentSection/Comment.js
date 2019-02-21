/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Username } from '../Styles/Username';

const CommentWrapper = styled.div``;

const Divider = styled.span`
  font-weight: normal;
  padding: 0 10px;
  text-align: left;
  color: #000000; 
`;


const Comment = ({ username, text }) => (
  <CommentWrapper>
    <Username>{username}<Divider>{text}</Divider></Username>
  </CommentWrapper>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
