import React from 'react';

const Toast = ({ message, type }) => {
  return <div className={type}>{message}</div>;
};

export default Toast;
