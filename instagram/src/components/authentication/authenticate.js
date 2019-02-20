import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
const authenticate = App => Login => class extends React.Component {

  render() {
    return (
      <App />
    );
  }
};

export default authenticate;
