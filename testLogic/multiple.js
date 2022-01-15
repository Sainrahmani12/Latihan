const  solution = (input) => {
    let multipleOfThree = 3;
    let multipleOfFive = 5;
    let arrayOfNumbers = [];
    
    let i = 1;
    while (multipleOfThree < input) {
    arrayOfNumbers.push(multipleOfThree);
    i++;
    multipleOfThree = 3 * i;
    }
    
    i = 1;
    while (multipleOfFive < input) {
    arrayOfNumbers.push(multipleOfFive);
    i++;
    multipleOfFive = 5 * i;
    }
    
    let sum = 0;
    for (i = 0; i < arrayOfNumbers.length; i++) { sum += arrayOfNumbers[i]; }
    
    return (sum)
    
    }

    console.log(solution(10))