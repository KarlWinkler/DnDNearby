import React from 'react';

import '../Styles/Hint.css';

function Hint(props) {
  return (
    <div {...props} className={`hint ${props.className || ''}`}  >
      {props.children}
    </div>
  );
}

export default Hint;