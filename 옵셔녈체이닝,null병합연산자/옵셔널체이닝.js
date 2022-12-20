const user = {};

console.log(user.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
console.log(user?.address?.street); // undefined

// 옵셔널 체이닝은 바로 앞에 있는 대상만을 평가하며, 확장되지 않음.
const user = {};

// user만 평가 대상이 되며, user은 undefined나 null이 아니므로, ?.를 사용 안한것과 같은 결과를 가짐.
console.log(user?.address.street); // TypeError: Cannot read properties of undefined (reading 'street')
// 이미 address에서 평가가 undefined로 나옴.(평가대상이 address)
console.log(user.address?.street); // undefined
// 따라서 그 이후값은 계속 undefined가 나옴.(평가대상이 address)
console.log(user.address?.street.type); // undefined

// 대괄호 연산자
const arr = [
  [1, 8, 2],
  [3, 4, 5],
];
// arr 값은 평가대상이 아니고 무조건 존재해야 하기 때문에 부적합.
console.log(arr?.[5][1]); // TypeError: Cannot read properties of undefined (reading '1')
// 평가대상은 arr이의 index값이 5인 요소의 존재 유무.
console.log(arr[5]?.[1]); // undefined
