import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import StyledTextField from '../../Components/StyledTextField';
import TextArea from '../../Components/TextArea';
import Title from '../../Components/Title';
import HelperNav from '../../Components/HelperNav';

const NewPost = ({ posts, setPosts, id, setId }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const post = { id: id, name: name, content: content, image: (image || 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'), avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NSEUHWmQsGxt4SfVM3f8VMW7vN8JsHnL-CnVII5E4A&s'};
  const navigate = useNavigate();

  const handleCreate = (e) => {
    console.log('Creating post');
    e.preventDefault()
    setPosts([post, ...posts]);
    setId(id + 1);
    navigate('/forums');
  };

  return (
    <div>
      <HelperNav links={[{href: '/forums', text: 'Forums'}]} current='New Post' helpPath='/learn/about-forums' />
      <Title title={'New Post'} />
      <div className='note-edit' style={{ marginBottom: 'var(--spacing-3)' }}>
        <StyledTextField
          value={name}
          fontSize="48px"
          placeholder='Post Name'
          onChange={(event) => {
            post.name = event.target.value;
            setName(event.target.value);
          }}
        />
        <StyledTextField
          value={image}
          fontSize="24px"
          placeholder='Image URL'
          onChange={(event) => {
            post.image = event.target.value;
            setImage(event.target.value);
          }}
        />
        <p>Post Content</p>
        <TextArea 
          value={content} 
          onChange={(event) => {
            post.content = event.target.value;
            setContent(event.target.value);
          }}
          placeholder='Write you post here!'
        />
      </div>

      <div className='links'>
        <Link className='button button-add' onClick={handleCreate} >Create</Link>
        <Link className='button' to='/forums' >Cancal</Link>
      </div>
    </div>
  );
};

export default NewPost;