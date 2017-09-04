import React from 'react';

export default function StickyTable({headers, data, dataDescriptor}) {
  return (
    <div>
      <table className="sticky">
        <thead>
          <tr>
            {headers.map((title, i) => (<th key={i}>{title}</th>))}
          </tr>
        </thead>
      </table>

      <table>
        <thead>
          <tr>
            {headers.map((title, i) => (<th key={i}>{title}</th>))}
          </tr>
        </thead>
        <tbody>
          {data.map((elem, i) => {
            return (
              <tr key={i}>
                {dataDescriptor.map((descriptor, i) => {
                  if (typeof descriptor === 'string') {
                    return (<td key={i}>{elem[descriptor]}</td>);
                  }

                  let val = (descriptor.resolver || ((v) => v))(elem[descriptor.key]);

                  if (descriptor.type === 'icon') {
                    return (
                      <td key={i}
                        className={descriptor.className ? descriptor.className : ''}>
                          <i className={`fa ${val}`}></i>
                      </td>
                    );
                  }

                  return (
                    <td key={i}>{value}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
