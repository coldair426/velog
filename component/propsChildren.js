// Wrapper.js
import React from 'react';

function Wrapper() {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return <div style={style}></div>;
}

export default Wrapper;

// App.js
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name='react' color='red' />
      <Hello color='pink' />
    </Wrapper>
  );
}

export default App;

// Wrapper.js
import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
