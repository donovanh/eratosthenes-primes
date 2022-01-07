const primes = require('./js/cjs')

console.time('Calculating')
const result = primes.generate(1, 10_000_000)
console.timeEnd('Calculating')
console.log(result)
