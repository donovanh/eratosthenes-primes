import { generate } from './primes'

describe('generate', () => {
  it('should generate prime numbers between 1..100', () => {
    const expectedResultFor100 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    expect(generate(1, 100))
      .toEqual(expectedResultFor100)
  })

  it('should handle negative start number', () => {
    expect(generate(-10, 100))
      .toEqual('Start number should be 1 or greater')
  })

  it('should handle finish being less than start', () => {
    expect(generate(100, 1))
      .toEqual('Finish number should be greater than start')
  })

  it('should generate prime numbers with start number greater than 1', () => {
    const expectedResultFor100 = [101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]
    expect(generate(100, 200))
      .toEqual(expectedResultFor100)
  })

  it('should handle large numbers', () => {
    expect(generate(100000,100100))
      .toEqual([100003, 100019, 100043, 100049, 100057, 100069])
  })
})
