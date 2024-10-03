import React from 'react';

const GroupChatCreate = () => {
  return (
    <div>
      <form action="">
        <input type="text" name='title' disabled/>
        <input type="text" name='content' disabled/>
        <input type='selectBox' name='anonymous' disabled/>
        <input type="text" name='profileImage' disabled/>
        <button type="button">send</button>
      </form>
    </div>
  );
};

export default GroupChatCreate;