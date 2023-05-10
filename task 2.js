const myFunction2 = function (str, obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(str)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
};

// Пример создания объекта:
// const Obj1 = {
  // a: 'abc'
  // }

  // Пример вызова функции myFunction2:
  // myFunction2('a', Obj1)
  // Результат: true
