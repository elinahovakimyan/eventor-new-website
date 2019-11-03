import React from 'react';

import './styles.scss';


function VenueCard({
  imgSrc, title, onClick, color, className,
}) {
  return (
    <div
      onClick={onClick}
      className={`VenueCard ${className}`}
      style={{ color }}
    >
      <div className="VenueCard_img" style={{ backgroundImage: `url(${imgSrc})` }} />
      <h3 className="VenueCard_title">{title}</h3>
    </div>
  );
}

export default React.memo(VenueCard);
