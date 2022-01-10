const primes = require('./js/cjs')

console.time('Calculating')
const result = primes.generate(1, 100_000_000)
console.timeEnd('Calculating')
console.log(result)
