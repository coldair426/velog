function solution(board) {
  // 원소 기준 테두리
  const outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;
  board.forEach((yVals, y, self) =>
    yVals.forEach((xVals, x) => {
      if (xVals === 1) return 0; // 폭발지역
      // 옵셔널 체이닝을 이용해서 배열의 가장자리 원소들의 오류 방지.
      // NOT연산자를 이용해서 0과 1을 truthy, falsy 한 값으로 가공함.
      // ([oy, ox]) => self[oy + y]?.[ox + x] === 1 이 값과 같은 기능을 함.
      // 즉 0(안전지대)와 1(위험지역)을 진짜 잘 가공한듯...
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? 0
        : safezone++;
    })
  );
  return safezone;
}
