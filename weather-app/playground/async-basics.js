console.log('starting app');

setTimeout(() => {
  console.log('inside call-back function');
}, 2000);

setTimeout(() => {
  console.log('second setTimeout with 0 second');
}, 0);

console.log('finishing app');
