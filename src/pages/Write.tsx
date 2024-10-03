import React from 'react';

const Write = () => {

  const handlePostSubmit = ()=>{
    
  }
  return (
    <div>
      <form action="submit">
        <input type="text" name='title' />
        <input type="text" name='content' />
        <button type="button">send</button>
      </form>
    </div>
  );
};

export default Write;