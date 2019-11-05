import React from 'react';

import Header from '../../components/common/Header';
import PackageCard from '../../components/shared/PackageCard';

import './styles.scss';
import FiltersBar from '../../components/shared/FiltersBar';

function PackagesList() {
  return (
    <div className="PackagesList">
      <Header />

      <FiltersBar />

      <h2 className="PackagesList_section_title">Packages for you</h2>

      <div className="PackagesList_cards_container">
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" themeTitle="Princess partyyyyyyy" venue="4teen Cafe & Restaurant" />
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" themeTitle="Art party" venue="Good Time Family Entertainment" />
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" themeTitle="Pirate party" venue="El Garden Kids' Zone" />
        <PackageCard className="PackagesList_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" themeTitle="Unicorn party" venue="Little Einstein" />
      </div>
    </div>
  );
}

export default React.memo(PackagesList);
