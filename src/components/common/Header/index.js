import React from 'react';

import './styles.scss';


function Header() {
  return (
    <div className="Header">
      <img src={require('../../../assets/eventor.png')} alt="Eventor logo" />
    </div>
  );
}

export default React.memo(Header);
