import React from 'react';

import './styles.scss';


function Button({
  children, onClick, block, className,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`Button ${block ? 'block' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
