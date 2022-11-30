const random = require('./randomize');

module.exports = async function emoji() {
  let emoji = process.env.EMOJIS;
  let randomEmoji = await random(emoji, ',');
  let idNumbers = /\d/g;
  let idName = /:\D*:/g;
  let emojiFormat = {
    id: null,
    name: null,
    animated: null
  };
  let button = '';
  if (randomEmoji.search(idNumbers) == -1) {
    emojiFormat.id = null,
    emojiFormat.name = randomEmoji.slice(2, -2),
    emojiFormat.animated = false
    button = `rand`;
  } else {
    let startName = randomEmoji.search(idName);
    let startID = randomEmoji.search(idNumbers);
    emojiFormat.id = randomEmoji.slice(startID, -1);
    emojiFormat.name = randomEmoji.slice(startName + 1, startID - 1);
    if (randomEmoji.startsWith('<a:')) {
      emojiFormat.animated = true;
      button = `${emojiFormat.id}_gif`;
    } else {
      emojiFormat.animated = false;
      button = `${emojiFormat.id}_webp`;
    }
  }
  console.log('emojiFormat', emojiFormat);
  return [emojiFormat, button];
};
