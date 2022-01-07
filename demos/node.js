const primes = require('./js/cjs')

console.time('Calculating')
const result = primes.generate(1, 100000)
console.timeEnd('Calculating')
console.log(result)
