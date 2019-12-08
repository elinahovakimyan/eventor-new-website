import React, { useEffect, useRef } from 'react';
import SVG from 'react-inlinesvg';

import './styles.scss';


function Modal(props) {
  const node = useRef();

  const handleClick = (e) => {
    if (!(node.current && node.current.contains(e.target))) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);


  if (props.isOpen) {
    return (
      <div className={`Modal ${props.isOpen ? 'Modal_open' : ''}`}>
        <div className="Modal_box" ref={node}>
          <SVG onClick={props.onClose} className="Modal_box_close" src="/assets/icons/close.svg" />

          {props.children}
        </div>
      </div>
    );
  }

  return null;
}


export default React.memo(Modal);
