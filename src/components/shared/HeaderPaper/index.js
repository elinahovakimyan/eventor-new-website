import React from 'react';

import './styles.scss';


function HeaderPaper({ children }) {
  return (
    <div className="HeaderPaper">
      {children}
    </div>
  );
}

export default React.memo(HeaderPaper);
