var promise = new Promise((resolve, reject) => {
   resolve('Hello is resolve');
   reject('Hello is reject');
   
  setTimeout(() => {
    resolve('Hello is resolve');
  }, 2000)
})

promise.then((message) => {
  console.log('Success: ', message);
}, (error) => {
console.log('failur: ', error);
})
