module.exports = async function date() {
  let now = new Date();
  // now = Date.parse(now);
  let format = process.env.DATE_FORMAT;
  format = format.split(',');
  let date = '';
  for (let i of format) {
    if (i == 'Date') {
      date += (now.getDate()).toString();
    } else if (i == 'Month') {
      date += (now.getMonth() + 1).toString();
    } else if (i == 'Year') {
      date += (now.getFullYear()).toString();
    }
    date += '/';
  }
  date = date.slice(0,-1)
  return date;
}