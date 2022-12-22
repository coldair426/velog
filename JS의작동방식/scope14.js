{
  let x = { color: 'blue' };
  let y = x;
  let z = 3;
  {
    let x = 5; // 외부 스코프의 x 숨김.
    console.log(x); // 5
    console.log(y.color); // blue. 외부 스코프의 y.
    y.color = 'red'; // 외부 스코프의 y를 변경.
    console.log(z); // 3. 외부 스코프의 z.
  }
  console.log(x.color); // red. y 객체가 수정되어 같이 수정됨.(참조타입)
  console.log(y.color); // red. 내부 스코프에서 수정됨.
  console.log(z); // 3
}
