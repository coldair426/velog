/*
x는 블록 안에서 정의됨.
블록을 나가는 즉시 x도 스코프 밖으로 사라짐.
*/
console.log('before block'); // before block
{
  console.log('inside block'); // inside block
  const x = 3;
  console.log(x); // 3
}
console.log(`outside block; x=${x}`); // ReferenceError: x is not defined
