import React from 'react';
import EmailFilters from './EmailFilters';
import StickyTable from './StickyTable';

export default function EmailDashboard({filters, data, updateFilters}) {
  return (
    <div>
      <EmailFilters
        filters={filters}
        onChange={updateFilters}
      />
      <main>
        <StickyTable
          headers={['', 'name', 'email', 'company']}
          data={data}
          dataDescriptor={[
            {
              key: 'bookmark',
              type: 'icon',
              className: 'bookmark',
              resolver: (value) => value ? 'fa-bookmark' : 'fa-bookmark-o'
            },
            'name',
            'email',
            'company'
          ]}
        />
      </main>
    </div>
  );
}
