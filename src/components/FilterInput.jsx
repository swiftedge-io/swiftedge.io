import React from 'react';

export default function FilterInput({name, label, onChange}) {
  return (
    <div className="filter-group">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} onChange={onChange} />
    </div>
  );
}
