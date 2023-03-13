import React, { useEffect } from 'react';

function test() {
  useEffect(
    () => {
      // 코드1.
      return () => {
        // 코드2.
      };
    },
    [
      /* 변수, state */
    ]
  );
  return;
}
export default test;
