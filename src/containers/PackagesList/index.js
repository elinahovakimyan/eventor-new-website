import React from 'react';

import Header from '../../components/common/Header';
import PackageCard from '../../components/shared/PackageCard';

import './styles.scss';

function PackagesList() {
  return (
    <div className="PackagesList">
      <Header />

      <div className="PackagesList_filters">
        <h1 className="PackagesList_title">Filters</h1>
      </div>

      <h2 className="PackagesList_section_title">Packages for you</h2>

      <div className="PackagesList_cards_container">
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="4teen Cafe & Restaurant" />
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="Good Time Family Entertainment" />
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="El Garden Kids' Zone" />
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="Little Einstein" />
      </div>
    </div>
  );
}

export default React.memo(PackagesList);
