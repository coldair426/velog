function solution(quiz) {
  return quiz.map((v) => {
    const [exp, result] = v.split(' = ');
    // 연산자를 1과 -1로(sign) 처리하는것이 관건.
    const sign = exp.includes('+') ? 1 : -1;
    // sign에 따라 +와 -를 구분.
    const [a, b] = exp.split(sign === 1 ? ' + ' : ' - ');
    // sign을 연산에 이용.
    return +a + +b * sign === +result ? 'O' : 'X';
  });
}
