// App.js
import React from 'react';
import Hello from './Hello';

function App() {
  return <Hello name='react' color='red' />;
}

export default App;

// Hello.js
import React from 'react';

function Hello(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>;
}

export default Hello;
