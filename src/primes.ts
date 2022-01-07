export const generate = (start: number, finish: number): number[] | string => {
  if (start < 1) {
    return 'Start number should be 1 or greater'
  }
  if (finish < start) {
    return 'Finish number should be greater than start'
  }
  const primes: number[] = []
  const results: number[] = []
  let currentNumber = 2
  for (let i = 2; i <= finish; i++) {
    let skipThisNumber = false
    for (let j = 0; j < primes.length; j++) {
      if (!(currentNumber % primes[j])) {
        // Not a prime number
        skipThisNumber = true
        continue;
      }
    }
    if (!skipThisNumber) {
      primes.push(currentNumber)
      if (currentNumber > start) {
        results.push(currentNumber)
      }
    }
    currentNumber++
  }
  return results
}
