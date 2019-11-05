import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';


function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img src={require('../../../assets/eventor.png')} alt="Eventor logo" />
      </Link>
    </div>
  );
}

export default React.memo(Header);
