import React from 'react';

import './styles.scss';


function NotFound() {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h2>Not Found Page</h2>
    </div>
  );
}

export default React.memo(NotFound);
