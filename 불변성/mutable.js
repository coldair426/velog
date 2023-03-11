const person = {
  name: 'Hong',
};
const copyPerson = person;
console.log(person); // { name: 'Hong' }
// 프로퍼티 갱신
person.name = 'Park';
console.log(person); // { name: 'Park' }
console.log(copyPerson); // { name: 'Park' }
// 프로퍼티 생성
person.address = 'Seoul';
console.log(person); // { name: 'Park', address: 'Seoul' }
console.log(copyPerson); // { name: 'Park', address: 'Seoul' }

console.log(person === copyPerson); // true
