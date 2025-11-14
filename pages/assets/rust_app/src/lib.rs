use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn sieve_of_eratosthenes(n: usize) -> Vec<i32> {
    let mut primes = Vec::new();
    let mut is_prime = vec![true; n + 1];
    is_prime[0] = false;
    is_prime[1] = false;

    for i in 2..=n {
        if is_prime[i] {
            primes.push(i as i32);

            let mut j = 2 * i;
            while j <= n {
                is_prime[j] = false;
                j += i;
            }
        }
    }

    primes
}