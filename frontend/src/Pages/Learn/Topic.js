import React from 'react';

import { Link, useParams } from 'react-router-dom';
import CustomBreadcrumbs from '../../Components/Breadcrumbs';
import Title from '../../Components/Title';

import Topics from '../../Data/topics.json';

import '../../Styles/Topic.css';
import '../../Styles/Learn.css';

function Topic() {
  const { topic: topicSlug } = useParams();

  const topic = Topics.find((item) => item.slug === topicSlug);

  return (
    <div className="topic">
      <CustomBreadcrumbs links={[{href: '/', text: 'Home'}, {href: '/learn', text: 'Learn'}]} current={topic.title} />
      <div className="topic-container">
        <Title title={topic.title} />
        <img src={topic.image} alt={topic.title} className="topic-image" />


        <div className="topic-description">
          <p dangerouslySetInnerHTML={{__html: topic.content}}></p>
        </div>

        <div className="topic-resources">
          <h2>Resources</h2>
          {
            topic.links.map((item, index) => {
              if (item.startsWith('http')) {
                return (
                  <a className='topic-resource' key={index} href={item} target="_blank" rel="noreferrer">
                    {item}
                  </a>
                );
              } else {
                return (
                  <Link className='topic-resource' key={index} to={`/learn/${item}`}>
                    {item}
                  </Link>
                );
              }
            })
          }
        </div>
      </div>
    </div>

  );
}

export default Topic;