import React from 'react';

import Checkbox from '../../../Components/Checkbox';
import StyledStandardTextField from '../../../Components/StyledStandardTextField';

const SelectItem = ({name, value}) => {
  return (
    <div className='select'>
      <Checkbox />
      <p>{name}</p>
      <p className='value'>{value}</p>
    </div>
  );
};

export default SelectItem;