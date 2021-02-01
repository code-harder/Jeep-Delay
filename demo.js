const { delay } = require('./index');

const test = async () => {
  console.log('start');
  await delay(3000);
  console.log('end');
}
test();