/*
변수 숨김을 보여주는 예제.
내부 블록의 x는 외부 블록의 x와 이름만 같음.
외부 스코프의 x를 숨기는(가리는) 효과.
또한 실행 흐름이 내부 블록에 들어가 새 변수 x를 정의하는 순간,
두개의 x는 모두스코프 안에 존재.
변수 이름이 같으므로 외부 스코프의 x에 접근할 방법이 없음.

*/
{
  let x = 'blue';
  console.log(x); // blue
  {
    let x = 3;
    console.log(x); // 3
  }
  console.log(x); // blue
}
console.log(typeof x); // undefined
