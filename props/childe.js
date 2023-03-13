import React from 'react';

function Box({ children }) {
  const style = {
    border: '5px solid red',
    padding: '20px',
  };
  return <div style={style}>{children}</div>;
}

export default Box;

import React from 'react';
import Hello from './Hello';
import Box from './Box';

function App() {
  return (
    <Box>
      <Hello name='react' color='red' />
      <Hello color='pink' />
    </Box>
  );
}
