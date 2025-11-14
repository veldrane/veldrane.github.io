import init, * as wasm from '../pkg/rust_app';

init(wasm_path).then(_ => {
    function computePrimes()
    {
        var inputNumber = parseInt(
            document.getElementById('inputNumber').value,
        );
        if (!isNaN(inputNumber) && inputNumber >= 1) {
            var primes = wasm.sieve_of_eratosthenes(inputNumber);
            document.getElementById('output').innerText = primes.join(', ');
        } else {
            document.getElementById('output').innerText =
                'Please enter a valid integer.';
        }
    }
    let button = document.getElementById('computeButton');
    button.addEventListener('click', () => {
        computePrimes();
    });
});