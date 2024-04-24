import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import defaultComments from '../../Data/comments.json';
import Comment from './Components/Comment';
import HelperNav from '../../Components/HelperNav';
import TextArea from '../../Components/TextArea';

const ViewPost = ({ posts, user }) => {
  const [comments, setComments] = useState(defaultComments);
  const [newComment, setNewComment] = useState('');
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  return (
    <div>
      <HelperNav links={[{ href: '/home', text: 'Home' }, { href: '/forums', text: 'Forums' }]} current={post.name} helpPath='/learn/about-forums' />
      <h1>{post?.name}</h1>
      <img className={'view-post-image'} src={post?.image} alt={post?.title} />
      <p style={{ paddingBottom: 'var(--spacing-3)' }}>{post?.content}</p>

      {user && (
        <>
          {!open && (<Link className='button button-add' onClick={() => setOpen(true)}>+ New Comment</Link>)}

          {open && (
            <div className='note-edit'>
              <TextArea
                value={newComment}
                onChange={(event) => setNewComment(event.target.value)}
                placeholder='Write your comment here!'
              />
              <div className='links'>
                <Link className='button button-add stop-being-long' onClick={() => {
                  setComments([{ id: comments.length + 1, name: user.username, content: newComment }, ...comments]);
                  setNewComment('');
                  setOpen(false);
                }}>Create</Link>
                <Link className='button button-cancel stop-being-long' onClick={() => setOpen(false)}>Cancel</Link>
              </div>
            </div>
          )}
        </>
      )}
      


      <div style={{ marginTop: 'var(--spacing-3)' }}>
        {comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default ViewPost;