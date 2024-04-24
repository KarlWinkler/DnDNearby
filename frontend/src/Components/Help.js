import React from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as HelpIcon } from '../Art/helpIcon.svg';

const Help = ({ to }) => {
  return (
    <Link to={ to } target={'_blank'}>
      <HelpIcon className='icon-large' />
    </Link>
  );
};

export default Help;