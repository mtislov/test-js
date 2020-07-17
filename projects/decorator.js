
let fac = function f(n) {
  return (n !== 1) ? f(n - 1) * n : n;
}


function logResultDecorator (func, funcName) {

  
  return function (...args) {

    let result = func(args);
    console.log(`Результат функции ${funcName} : ${result}`);
  } 
}


function callCountDecorator (func, funcName) {
  let count = 0;
  return function (...args) {
    count++;
    func(args);
    console.log(`Функиция ${funcName} была вызванна ${count} раз`);
  }
}



fac = logResultDecorator(fac, 'factorial');
fac = callCountDecorator(fac, 'factorial');

console.log(fac);

fac(5);
fac(6);
fac(7);
