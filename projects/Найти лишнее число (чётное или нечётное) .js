function iqTest(numbers) {

    let even = [];
    let odd = [];

    numbers = numbers.split(' ');
    numbers.forEach(element => {
        if (element % 2 == 0 ) even += element;
        if (element % 2 > 0) odd += element;
    });

    return (even.length < odd.length) ? numbers.indexOf(even) + 1 : numbers.indexOf(odd) + 1;
}









console.log( iqTest ("2 4 7 8 10") );



/* 
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
 */