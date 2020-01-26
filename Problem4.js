function largestPalindromeProduct(n) {
    let upper_limit = 0;
    let lower_limit = 0;
    for(let i = 1;i <= n;i++){
        upper_limit *= 10;
        upper_limit += 9;
    }
    lower_limit = 1 + (upper_limit/10);
    let max_product = 0;
    for(let i = upper_limit;i >= lower_limit; i--){
        for(let j = i; j >= lower_limit; j--){
            let product = i * j;
            if(product < max_product){
                break;
            }
            let number = product;
            let reverse = 0;
            while(number){
                reverse = reverse * 10 + number % 10;
                number = Math.floor(number/10);
            }
            if(product === reverse && product > max_product){
                max_product = product;
            }
        }
    }
    return max_product;
}
  
console.log(largestPalindromeProduct(3));
  