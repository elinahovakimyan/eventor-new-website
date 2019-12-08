import React from 'react';

import Modal from '../../common/Modal';
import RadioButton from '../../common/RadioButton';

import './styles.scss';


function ProvidersModal({
  isModalOpen, toggleModal, selectedOption, onChange, options, title,
}) {
  return (
    <Modal isOpen={isModalOpen} onClose={() => toggleModal(false)}>
      {selectedOption
        ? (
          <div className="ProvidersModal_content">
            <img className="ProvidersModal_image" src={selectedOption.image} alt={title} />
            <h3 className="ProvidersModal_description">{selectedOption.description}</h3>
          </div>
        ) : null}

      {options.map((opt) => (
        <div className="ProvidersModal_option" onClick={() => onChange(opt)}>
          <RadioButton isChecked={!!selectedOption && selectedOption.id === opt.id} />
          <p>{opt.providerName}</p>
        </div>
      ))}

      <button className="ProvidersModal_button" onClick={() => toggleModal(false)}>Close</button>
    </Modal>
  );
}

export default React.memo(ProvidersModal);
