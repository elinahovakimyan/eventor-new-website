import React from 'react';
import { Card } from 'antd';

import './styles.scss';

const { Meta } = Card;

function PackageCard({
  imgSrc, themeTitle, venue, onClick, className,
}) {
  return (
    <Card
      hoverable
      onClick={onClick}
      cover={<img alt="example" src={imgSrc} />}
      className={`PackageCard ${className}`}
    >
      <Meta title={themeTitle} description={venue} />
    </Card>
  );
}

export default React.memo(PackageCard);
