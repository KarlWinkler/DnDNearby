import React from 'react';

const LearnItem = ({ item }) => {
  return (
    <div>
      <div className="result-box">
        <img src={item.image} alt="placeholder" className='item-image' />
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default LearnItem;