import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Feed from './Components/Feed';
import Communities from './Components/Communities';

import '../../Styles/Forums.css';
import HelperNav from '../../Components/HelperNav';
import Search from '../../Components/Search';
import Title from '../../Components/Title';

const Forums = ({ user, posts, setPosts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <HelperNav links={[{href: '/', text: 'Home'}]} current='Forums' helpPath='/learn/about-the-forum' />
      <div className='forums'>
        <Title title={'Forums'} />
        <div className='title'>
          <h2>Top Posts</h2>
          {user && <Link className='button button-add' to='/forums/new-post'>+ New Post</Link>}
        </div>
        <Search placeholder={'Search Posts'} onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
        <Feed  posts={filteredPosts} setPosts={setPosts} />
        <Communities />
      </div>
    </div>
  );
};

export default Forums;