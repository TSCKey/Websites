
function isPrime(x){
    if (x <= 1) return false;
    if (x <= 3) return true;
    let divisor = 0
    for (let i = 2; i<=x/2; i++){
       if( x % i === 0){
           divisor++;
       }
    }
    return divisor === 0;


}

function primes(n){
        let v = [];
        let p = 0;
        let i = 2;
    while (true){
        
        if (isPrime(i)){
            v.push(i);
            p++;
            i++;
        }

        if (p === n) {
            break;
        }
    }

    return v;
}

function lPF(n){
    if (isPrime(n)) return n;
   let factor = -1;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            factor = i;
            if (isPrime(n/i))
            factor = n/i;
            break
        }
    }
    return factor;
}