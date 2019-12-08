import React from 'react';

import OptionCard from '../OptionCard';

import './styles.scss';


function OptionsSection({
  onSelect, selectedOption, className, title, options, optionClassName,
}) {
  return (
    <div className={`OptionsSection ${className}`}>
      <h2 className="OptionsSection_title">{title}</h2>
      <div className="OptionsSection_row">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            isSelected={selectedOption && selectedOption.id === option.id}
            onSelect={() => onSelect(option)}
            option={option}
            className={optionClassName}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(OptionsSection);
