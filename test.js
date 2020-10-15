


function parse(str) {
    return str.match(/[\+\-\*\/]/g);
}



console.log(parse("1.2 + 3.4"));


//let [a, op, b] = parse("1.2 * 3.4");

//alert(a); // 1.2
//alert(op); // *
//alert(b); // 3.4

// (-?\d+(\.\d+)?) - для цифр
// /[\+\-\*\/]/g   - для знаков