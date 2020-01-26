function fiboEvenSum(n){
    if(n === 1){
        return 0;
    }
    else if(n === 2){
        return 2;
    }
    else{
        let sum = 2;
        let a = 1;
        let b = 2;
        let c;
        for(let i = 3;i <= n;i++){
            c = a + b;
            if(c % 2 === 0){
                sum += c;
            }
            a = b;
            b = c;
        }
        return sum;
    }
}
  
console.log(fiboEvenSum(43));