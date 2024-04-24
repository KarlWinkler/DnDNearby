import React from 'react';
import Post from './Post';

function Feed({ posts, setPosts }) {
  return (
    <div className='feed'>
      {posts.map(post => (
        <Post post={post} posts={posts} setPosts={setPosts} />
      ))}
    </div>
  );
}

export default Feed;