import React from 'react';

const Message = ({ username, message }) => {
  return (
    <p className="user-message">{ message }</p>
  );
}

export default Message;
