const myFunction2 = function (str, obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(str)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
};

//или

//const myFunction2 = function(str, obj) {
//for (let key in obj) {
//if (obj.hasOwnProperty(str)) {
//console.log(str in obj);
//} else {
//console.log('false');
//}
//}
//};
