import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Search from '../../Components/Search';
import LearnItem from '../../Components/LearnItem';

import HelperNav from '../../Components/HelperNav';
import Title from '../../Components/Title';
import Topics from '../../Data/topics.json';
import Popular from '../../Data/popular.json';

import '../../Styles/Learn.css';

function Learn() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = Topics.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="learn">
      <HelperNav links={[{href: '/', text: 'Home'}]} current='Learn' helpPath='/learn/learn-about-learn' />

      <Title title={'Learn'} />

      <h2>Popular Topics</h2>
      <div className="popular-topics">
        {Popular.map(topic => {
          topic = Topics.find(item => item.slug === topic);
          return (
            <Link key={topic.slug} to={topic.slug}>
              <LearnItem item={topic} />
            </Link>
          );
        })}
      </div>

      <h2>All Topics</h2>
      <Search onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Search for a topic" />

      <div className="results-grid">
        {filteredTopics.map(topic => (
          <Link key={topic.slug} to={topic.slug}>
            <LearnItem item={topic} />
          </Link>
        ))}
      </div>
      
    </div>
  );
}

export default Learn;