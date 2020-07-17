
let fac = function f(n) {
  return (n !== 1) ? f(n - 1) * n : n;
}


function logResultDecorator (func, funcName) {

  
  return function () {

    let result = func.apply(this, arguments);
    console.log(`Результат функции ${funcName} : ${result}`);
    return result;

  } 
}




fac = logResultDecorator(fac, 'factorial');

fac(5);