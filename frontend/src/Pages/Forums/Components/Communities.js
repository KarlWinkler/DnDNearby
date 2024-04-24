import React, { useState } from 'react';
import StyledCard from '../../../Components/StyledCard';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Search from '../../../Components/Search';

import communities from '../../../Data/communities.json';

function Communities() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='communities-container'>
      <StyledCard>
        <div className="communities">
          <h2 style={{ color: 'var(--text-color)' }}>Communities</h2>
          <Search placeholder={'Search Communities'} onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} />
          {filteredCommunities.map(community => (
            <Link key={community.id} className="community" to={`/forums/communities/${community.id}`}>
              {community.name}
              <span style={{ fontSize: '12px', color: 'var(--text-color-dark)' }}>{community.about}</span>
            </Link>
          ))}
        </div>
      </StyledCard>
    </div>
  );
}

export default Communities;