import React, { useState } from "react";

const Write = () => {
  const [title, setTitle] : any = useState('')
  const [content, setContent] : any = useState('')

  const handlePostSubmit = async(e :any) => {
    const body = {
      title : title,
      content : content
    }
    // const result = await postWrite(body);
  };
  
  return (
    <div>
      <form action="submit" onSubmit={handlePostSubmit}>
        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" name="content" onChange={(e)=>setContent(e.target.value)} />
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Write;
