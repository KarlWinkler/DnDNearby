import React from 'react';

import '../../../Styles/Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h4>{comment.name}</h4>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;