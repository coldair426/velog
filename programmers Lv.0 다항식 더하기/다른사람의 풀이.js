function solution(polynomial) {
  const polynomialArr = polynomial.split('+').map((i) => i.trim());
  const linearTerm = polynomialArr
    .filter((i) => i.includes('x'))
    .reduce(
      (acc, current) =>
        current === 'x' ? (acc += 1) : +current.slice(0, -1) + acc,
      0
    );
  const constantTerm = polynomialArr
    .filter((i) => !i.includes('x'))
    .reduce((acc, current) => acc + +current, 0);

  const answer = [];
  // 조건으로 인해 0(falsy)이 들어가면 배열에 들어가지 않음.
  if (linearTerm) answer.push(`${linearTerm === 1 ? '' : linearTerm}x`);
  if (constantTerm) answer.push(constantTerm);
  // 배열에 원소가 2개가 존재하지 않으면 join은 실행하지 않게 됨.
  return answer.join(' + ');
}
