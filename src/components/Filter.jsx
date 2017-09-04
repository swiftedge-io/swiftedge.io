import React from 'react';

export default function Filter({children}) {
  return (
    <div className="filters">
      <h2>Filters</h2>
      {children}
    </div>
  );
}
