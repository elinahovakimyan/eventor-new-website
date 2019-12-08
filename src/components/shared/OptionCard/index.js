import React, { useState } from 'react';
import SVG from 'react-inlinesvg';

import { getIconbyPriceType } from '../../../helpers';
import ProvidersModal from '../ProvidersModal';

import './styles.scss';


function OptionCard({
  className, option, onSelect, isSelected,
}) {
  const [selectedProvider, changeProvider] = useState(null);
  const [isModalOpen, toggleModal] = useState(false);

  return (
    <div className="OptionCard_container">
      <div className={`OptionCard ${isSelected ? 'OptionCard_selected' : ''} ${className}`}>
        <div onClick={onSelect} className="OptionCard_content">
          {option.image && (
            <div
              className="OptionCard_image"
              style={{ backgroundImage: `url(${option.image})` }}
              alt={option.title}
            />
          )}

          {option.title && (
            <h3 className="OptionCard_title">
              {option.title}
            </h3>
          )}

          {option.list
            && (
              <ul>
                {option.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
        </div>

        {!!option.options && !selectedProvider
          ? (
            <div className="OptionCard_price_wrapper">
              <button className="OptionCard_button" onClick={() => toggleModal(true)}>Choose Provider</button>
            </div>
          ) : (
            <div className="OptionCard_price_wrapper">
              <div className="OptionCard_price_container">
                <SVG className="OptionCard_price_icon" src={getIconbyPriceType(option.priceType)} />
                <h3 className="OptionCard_price">
                  {`${selectedProvider ? selectedProvider.price : option.price}֏`}
                </h3>
              </div>
              {!!option.options && (
                <p
                  className="OptionCard_footer_link"
                  onClick={() => toggleModal(true)}
                >
                  Change
                </p>
              )}
            </div>
          )}
      </div>

      {option.options && (
        <ProvidersModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          onChange={changeProvider}
          selectedOption={selectedProvider}
          options={option.options}
        />
      )}
    </div>
  );
}

export default React.memo(OptionCard);
