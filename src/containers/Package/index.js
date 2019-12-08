import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

import HeaderPaper from '../../components/shared/HeaderPaper';
import OptionsSection from '../../components/shared/OptionsSection';
import Space from '../../components/common/Space';
import {
  themedPackage, childMenuOptions, adultMenuOptions, decorationOptions, entertainmentOptions,
} from './data';

import './styles.scss';


function Package() {
  const [adultsMenu, toggleAdultsMenu] = useState(null);
  const [childrenMenu, toggleChildrenMenu] = useState(null);
  const [decoration, toggleDecoration] = useState(null);
  const [entertainment, toggleEntertainment] = useState(null);

  return (
    <div className="Package">
      <HeaderPaper>
        <div className="Package_icon_container">
          <img className="Package_icon" src={themedPackage.icon} alt={themedPackage.title} />
        </div>
        <h1 className="Package_title">{themedPackage.title}</h1>
        <h3 className="Package_venue">{themedPackage.venue}</h3>
      </HeaderPaper>

      <div className="Package_content">
        <ImageGallery showFullscreenButton={false} showPlayButton={false} items={themedPackage.images} />

        <h2 className="Package_subtitle">About package</h2>
        <p>{themedPackage.description}</p>
      </div>

      <Space size="md" />

      <h2 className="Package_section_title">Let&apos;s build it!</h2>

      <OptionsSection
        selectedOption={childrenMenu}
        onSelect={toggleChildrenMenu}
        title="Menu options for children"
        options={childMenuOptions}
      />

      <OptionsSection
        selectedOption={adultsMenu}
        onSelect={toggleAdultsMenu}
        title="Menu options for adults"
        options={adultMenuOptions}
      />

      <OptionsSection
        selectedOption={decoration}
        onSelect={toggleDecoration}
        title="Decoration options"
        options={decorationOptions}
      />

      <OptionsSection
        selectedOption={entertainment}
        onSelect={toggleEntertainment}
        title="Entertainment options"
        options={entertainmentOptions}
      />

    </div>
  );
}

export default React.memo(Package);
