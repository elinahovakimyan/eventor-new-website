import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import ThemeCard from '../../components/shared/ThemeCard';
import VenueCard from '../../components/shared/VenueCard';

import './styles.scss';

function Homepage({ history }) {
  const handleSelect = () => {
    // TODO: Add choice to redux
    history.push('/packages');
  };

  return (
    <div className="Homepage">
      <Header />

      <div className="Homepage_banner">
        <h1 className="Homepage_title">Welcome</h1>

        <Link to="/packages">
          <Button className="Homepage_button" onClick={handleSelect}>Call to action</Button>
        </Link>
      </div>

      <h2 className="Homepage_section_title">Choose by theme</h2>

      <div className="Homepage_cards_container">
        <ThemeCard className="Homepage_card" iconSrc="https://www.mamalisa.com/images/blog/invitation.gif" title="Princess" />
        <ThemeCard className="Homepage_card" iconSrc="https://static.wrestletalk.com/app/uploads/2019/03/673px-Tampa_Bay_Buccaneers_logo.svg_.png" title="Pirate" />
        <ThemeCard className="Homepage_card" iconSrc="https://1000logos.net/wp-content/uploads/2017/05/Walt-Disney-logo.png" title="Disney" />
        <ThemeCard className="Homepage_card" iconSrc="https://www.mamalisa.com/images/blog/invitation.gif" title="Princess" />
      </div>

      <h2 className="Homepage_section_title">Choose by venue</h2>

      <div className="Homepage_cards_container">
        <VenueCard className="Homepage_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="4teen Cafe & Restaurant" />
        <VenueCard className="Homepage_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="Good Time Family Entertainment" />
        <VenueCard className="Homepage_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="El Garden Kids' Zone" />
        <VenueCard className="Homepage_card" imgSrc="https://media-cdn.tripadvisor.com/media/photo-s/0e/33/21/03/great-children-s-activity.jpg" title="Little Einstein" />
      </div>
    </div>
  );
}

export default React.memo(Homepage);
