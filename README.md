# Jeep-Delay

Provide the delay function for necessary functions.

```js
const { delay } = require('Jeep-Delay');

const test = async () => {
  console.log('start');
  await delay(3000);
  console.log('end');
}
test();
```