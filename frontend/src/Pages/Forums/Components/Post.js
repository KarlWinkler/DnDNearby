import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Heart from "react-animated-heart";
import Hint from "../../../Components/Hint";

import "../../../Styles/Home.css"

function Post({ post, posts, setPosts }) {
  const handleLikeClick = (e) => {
    e.preventDefault();
    const postsList = [...posts];
    const postIndex = postsList.findIndex((p) => p.id === post.id);
    postsList[postIndex].liked = !postsList[postIndex].liked;
    postsList[postIndex].liked ? postsList[postIndex].likes++ : postsList[postIndex].likes--;
    post.likes = postsList[postIndex].likes;

    setPosts(postsList);
  };

  return (
    <Link className="card post" to={`/forums/post/${post.id}`} style={{ color: 'var(--text-color)' }} >
      <div className="boards">
        <img src={post.image} alt="user" className="image-board" />
      </div>
      <div className="card-content">
        <div className="card-content-one">
          <h2>{post.name}</h2>
          <Hint>
            <p>{post.content.substring(0,300)}{post.content.length > 300 ? '...' : ''}</p>
          </Hint>
        </div>
        <div className="like">
          <Heart isClick={post.liked} onClick={(e) => {handleLikeClick(e); }} />
          <br></br>
          <center><span>{post.likes} Likes</span></center>
        </div>
      </div>
    </Link>

  );
}

export default Post;