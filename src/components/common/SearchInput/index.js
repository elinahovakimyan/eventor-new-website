import React from 'react';

import './styles.scss';


function SearchInput({
  placeholder, onChange, className, value,
}) {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder || 'Search'}
        className={`SearchInput ${className}`}
      />

      <img className="SearchInput_icon" src={require('../../../assets/search.svg')} alt="Search" />
    </div>
  );
}

export default React.memo(SearchInput);
