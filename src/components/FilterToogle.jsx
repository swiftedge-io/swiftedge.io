import React from 'react';

export default function FilterToogle({side, leftMessage, rightMessage, onToggle}) {
  return (
    <div className={`toogle ${side}`} onClick={onToggle}>
      <span>{leftMessage}</span>
      <div className="handle">
        <span></span>
      </div>
      <span>{rightMessage}</span>
    </div>
  );
}
