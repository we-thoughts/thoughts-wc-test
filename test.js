const obj = {
  message: 'hello' // ✗ avoid
}
function sum(a, b) {
  let result
  return (result = a + b) // ✗ avoid
}
