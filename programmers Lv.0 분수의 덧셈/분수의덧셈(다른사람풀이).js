/*
문제.
https://school.programmers.co.kr/learn/courses/30/lessons/120808
*/

function solution(denum1, num1, denum2, num2) {
  // 유클리드 호제법을 이용한 최대공약수(GCD) 공식.
  // 재귀를 이용해서 반복문의 사용 피함.
  function gcdMaker(a, b) {
    return a % b ? gcdMaker(b, a % b) : b;
  }

  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = gcdMaker(denum, num); //최대공약수

  return [denum / gcd, num / gcd];
}
