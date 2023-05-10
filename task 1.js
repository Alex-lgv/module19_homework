const myFunction = function (obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key);
    }
  }
};

// Пример создания объекта:
// const Obj1 = {
//   a: 'abc',
//   b: 'second property',
//   c: 12345
// }

// Пример вызова функции myFunction:
// myFunction(Obj1)
// Результат:
// a
// b
// c
