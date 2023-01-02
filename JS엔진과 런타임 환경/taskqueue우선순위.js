console.log('호출 스택');
setTimeout(() => console.log('Task Queue'), 0);
Promise.resolve().then(() => console.log('Microtask Queue'));
/*
호출 스택
Microtask Queue
Task Queue
*/
