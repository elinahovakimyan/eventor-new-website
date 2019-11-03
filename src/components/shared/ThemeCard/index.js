import React from 'react';

import './styles.scss';


function ThemeCard({
  iconSrc, title, onClick, color, className,
}) {
  return (
    <div
      onClick={onClick}
      className={`ThemeCard ${className}`}
      style={{ color }}
    >
      <img className="ThemeCard_icon" src={iconSrc} alt="Theme party" />
      <h3 className="ThemeCard_title">{title}</h3>
    </div>
  );
}

export default React.memo(ThemeCard);
