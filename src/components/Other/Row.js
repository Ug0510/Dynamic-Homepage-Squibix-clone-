import React from 'react';

const Row = ({ children }) => {
  return (
    <div style={{
      '--bs-gutter-x': '1.5rem',
      '--bs-gutter-y': '0',
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 'calc(-1 * var(--bs-gutter-y))',
      marginRight: 'calc(-.5 * var(--bs-gutter-x))',
      marginLeft: 'calc(-.5 * var(--bs-gutter-x))',
    }}>
      {children}
    </div>
    
  );
};

export default Row;
