var asyncAdd = (a,b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be number');
      }
    }, 1500)
  })
};

asyncAdd(1, 3).then((pass) => {
  console.log('Result: ', pass)
  return asyncAdd(pass, '6');
}).then((pass) => {
  console.log('final out put should be: ', pass)
}).catch((error) => {
  console.log("Error occurs: ", error);
})






// var promise = new Promise((resolve, reject) => {
//    resolve('Hello is resolve');
//    reject('Hello is reject');
//
//   setTimeout(() => {
//     resolve('Hello is resolve');
//   }, 2000)
// })
//
// promise.then((message) => {
//   console.log('Success: ', message);
// }, (error) => {
// console.log('failur: ', error);
// })
