function maxRedigit(n){
    return +('' + n).split('').sort().reverse().join('');
}


console.log(maxRedigit(123))