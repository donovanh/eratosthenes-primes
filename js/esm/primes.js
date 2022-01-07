export var generate = function (start, finish) {
    // Based on Sieve of Eratosthenes
    // https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
    if (start < 1) {
        return 'Start number should be 1 or greater';
    }
    if (finish < start) {
        return 'Finish number should be greater than start';
    }
    var primes = [];
    for (var i = 2; i < finish + 1; ++i) {
        primes[i] = true;
    }
    for (var i = 2; i * i <= finish; ++i) {
        if (primes[i]) {
            for (var j = i * i; j <= finish; j += i) {
                primes[j] = false;
            }
        }
    }
    var results = [];
    for (var i = start; i < finish; ++i) {
        if (primes[i]) {
            results.push(i);
        }
    }
    return results;
};
