import React from 'react';

import {ReactComponent as SearchIcon} from '../Art/searchIcon.svg';


function Search({ onChange, value, placeholder }) {
  return (
    <div className='topics-searchBar'>
      <SearchIcon className='searchIcon'/>
      <input type="text" placeholder={placeholder} className="search-input" value={value} onChange={onChange} />
    </div>
  );
}

export default Search;