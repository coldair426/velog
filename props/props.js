import React from 'react';
import Hello from './Hello';

function App() {
  return <Hello name='react' />;
}

export default App;


import React from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>;
}

export default Hello;
