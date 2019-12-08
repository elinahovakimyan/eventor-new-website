import React from 'react';

import './styles.scss';


function RadioButton({ isChecked, onClick }) {
  return (
    <div className="RadioButton" onClick={onClick}>
      {isChecked
        ? <div className="RadioButton_inner_circle" />
        : null}
    </div>
  );
}

export default React.memo(RadioButton);
