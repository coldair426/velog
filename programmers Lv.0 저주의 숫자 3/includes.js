// Arr.protorype.includes()
const cartoonist = ['침착맨', '주펄', '김풍', '기안84'];

console.log(cartoonist.includes('기안')); // false
console.log(cartoonist.includes('기안84')); // true
console.log(cartoonist.includes('주펄')); // true

// String.protorype.includes()
const cartoonist = ['침착맨', '주펄', '김풍', '기안84'].toString();
console.log(cartoonist.includes('기안')); // true
console.log(cartoonist.includes('기안84')); // true
console.log(cartoonist.includes('주')); // true
