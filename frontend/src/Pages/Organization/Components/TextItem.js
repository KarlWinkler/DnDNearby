import React from 'react';

import StyledTextField from '../../../Components/StyledTextField';

const TextItem = ({value, placeholder, title, onChange}) => {
  return (
    <div className='text-item'>
      <h4>{title}</h4>
      <StyledTextField defaultValue={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default TextItem;