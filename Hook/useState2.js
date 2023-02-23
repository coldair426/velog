import React, { useState } from 'react';

// 카운터 앱.
function App() {
  // State 생성
  const [number, setNumber] = useState(0);
  // 1증가 함수
  const increase = () => {
    setNumber(number + 1);
  };
  // 1감소 함수
  const decrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}
