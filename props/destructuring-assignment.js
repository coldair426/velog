// App,js
import React from 'react';
import Hello from './Hello';

function App() {
  return <Hello name='react' color='red' />;
}

export default App;


// Hello.js
import React from 'react';

function Hello({ color, name }) {
    return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello;
