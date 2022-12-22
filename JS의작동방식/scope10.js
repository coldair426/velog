/*
이 함수들은 모든 스코프에서 호출 가능하고, 명시적으로 user를 전달받음.
*/
function greet(user) {
  console.log(`hello, ${user.name}`);
}
function getBirthYear(user) {
  return new Date().getFullYear() - user.age;
}
