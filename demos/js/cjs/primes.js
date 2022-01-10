'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.generate = void 0
const generate = (start, finish) => {
  // Based on Sieve of Eratosthenes
  // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
  if (start < 1) {
    return 'Start number should be 1 or greater'
  }
  if (finish < start) {
    return 'Finish number should be greater than start'
  }
  const primes = []
  for (let i = 2; i < finish + 1; ++i) {
    primes[i] = true
  }
  for (let i = 2; i * i <= finish; ++i) {
    if (primes[i]) {
      for (let j = i * i; j <= finish; j += i) {
        primes[j] = false
      }
    }
  }
  const results = []
  for (let i = start; i < finish; ++i) {
    if (primes[i]) {
      results.push(i)
    }
  }
  return results
}
exports.generate = generate
