let f;
{
  let o = { note: 'safe' };
  f = function () {
    return o;
  };
}
let oRef = f();
console.log(oRef.note); // safe
oRef.note = ' Not so safe after all!';
console.log(oRef.note); // Not so safe after all!
