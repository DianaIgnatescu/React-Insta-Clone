import styled, { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Username = styled.h3`
  text-align: left;
  padding: 0 20px;
  margin: 10px 0;
  font-size: 14px;
  color: #262626;

  ${props => props.larger && css`
    font-size: 16px;
  `};
`;
