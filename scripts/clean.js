/* eslint-disable */
const del = require('del');

(async () => {
  await del(['dist/**/*']);
  console.log('Cleaned dist directory!');
})();
