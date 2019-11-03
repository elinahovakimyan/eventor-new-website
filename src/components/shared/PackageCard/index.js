import React from 'react';

import './styles.scss';


function PackageCard({
  imgSrc, title, onClick, color, className,
}) {
  return (
    <div
      onClick={onClick}
      className={`PackageCard ${className}`}
      style={{ color }}
    >
      <div className="PackageCard_img" style={{ backgroundImage: `url(${imgSrc})` }} />
      <h3 className="PackageCard_title">{title}</h3>
    </div>
  );
}

export default React.memo(PackageCard);
