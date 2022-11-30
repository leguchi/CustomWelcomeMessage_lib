const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

module.exports = async function (str, split) {
  let possibleArr = str.split(split);
  let max = possibleArr.length;
  let r = Math.floor(Math.random() * (max))
  console.log(r);
  console.log('randomize.js possibleArr[r]', possibleArr[r]);
  return possibleArr[r];
}