
let fac = function f(n) {
  return (n !== 1) ? f(n - 1) * n : n;
}



function logResultDecorator (func, funcName) {

  return function (...args) {

    let result = func(args);
    console.log(`Результат функции ${funcName} : ${result}`);
    return result;
  } 
}

function cacheDecorator(func) {
  let cache = {};
  return function(...args) {
    if (typeof cache[args] === 'undefined') {
      cache[args] = func(args);
    } else {
      console.log('Результат функции взят из кэша: ' + cache[args]);
    }
  }
}


function callCountDecorator (func, funcName) {
  let count = 0;
  return function (...args) {
    count++;
    console.log(`Функиция ${funcName} была вызванна ${count} раз`);
    func(args);
  }
}

function timeDecorator (func, funcName) {

  return function (...args) {
    console.time(`Время выполнения функции ${funcName}`);
    func(args);
    console.timeEnd(`Время выполнения функции ${funcName}`);
  }
}

function argumentsCountDecorator(func, requiredNumber) {
 return function (...args) {
   let argsCount = args.length;

   if (requiredNumber !== argsCount) {
     console.warn('Кол во аргументов не совпадает');
     return;
   }

   func(args);
 }

}




fac = logResultDecorator(fac, 'factorial');
fac = cacheDecorator(fac, 'factorial');
fac = callCountDecorator(fac, 'factorial');
fac = timeDecorator(fac, 'factorial');
fac = argumentsCountDecorator(fac, 1);


fac(12);
fac(12);
fac(11);

