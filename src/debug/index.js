
let a = 1;
let b; let c;
function create() {
  b = a;
  a = a + 1;
  c = a;
  return a
}
let d = {
  a: 1,
  b: 2,
  c: 3
}
// console.info(window.)
document.write(create());


