import React from 'react';

import './styles.scss';


function Checkbox({ isChecked, onClick }) {
  return (
    <div className="Checkbox" onClick={onClick}>
      {isChecked
        ? <img src={require('../../../assets/checked.svg')} alt="Checked icon" />
        : null}
    </div>
  );
}

export default React.memo(Checkbox);
