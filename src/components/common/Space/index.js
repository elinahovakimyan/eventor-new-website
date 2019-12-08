import React from 'react';

import './styles.scss';

// size should be one of these: xs, sm, md, lg
function Space({ size }) {
  return (
    <div className={`Space Space_${size}`} />
  );
}

export default React.memo(Space);
