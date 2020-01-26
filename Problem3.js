function largestPrimeFactor(number) {
    if(number === 2){
        return 2;
    }
    else if(number === 3){
        return 3;
    }
    else{
        let large = 0;
        let isPrime;
        for (let i = 2; i <= number; i++) {
            if (number % i == 0) {
            for (let j = 2; j <= i / 2; j++) {
                if (i % j == 0) {
                isPrime = false;
                } else {
                isPrime = true;
                }
            }
            if (isPrime == true) {
                number /= i
                large = large > i ? large : i;
            }
            }
        }
        return (large);
    }
}
  
console.log(largestPrimeFactor(600851475143));
  