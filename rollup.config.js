export default {
  input: 'dist/esm/primes.js',
  output: {
    file: 'dist/browser/primes.js',
    format: 'iife',
    name: 'primes'
  }
}
