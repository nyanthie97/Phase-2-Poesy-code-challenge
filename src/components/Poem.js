import React, { useState } from "react";

function Poem({title,content,author}) {
  const [isRead,setIsRead]=useState(false)
  function handleClick(){
    setIsRead(isRead=>isRead=!isRead)
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
  <button onClick={handleClick}>{isRead?"Mark as read":"Mark as unread"}</button>
    </div>
  );
}

export default Poem;