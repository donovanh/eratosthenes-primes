var primes = (function (exports) {
    'use strict';

    var generate = function (start, finish) {
        if (start < 1) {
            return 'Start number should be 1 or greater';
        }
        if (finish < start) {
            return 'Finish number should be greater than start';
        }
        var primes = [];
        var results = [];
        var currentNumber = 2;
        for (var i = 2; i <= finish; i++) {
            var skipThisNumber = false;
            for (var j = 0; j < primes.length; j++) {
                if (!(currentNumber % primes[j])) {
                    // Not a prime number
                    skipThisNumber = true;
                    continue;
                }
            }
            if (!skipThisNumber) {
                primes.push(currentNumber);
                if (currentNumber > start) {
                    results.push(currentNumber);
                }
            }
            currentNumber++;
        }
        return results;
    };

    exports.generate = generate;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
