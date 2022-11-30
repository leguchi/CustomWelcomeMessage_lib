const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const emoji = require('./../../../../../../helper/emoji');
const random = require('./../../../../../../helper/randomize');

if (context.params.event.data.custom_id === 'rand') {
  let emojiForURL;
  do {
    emojiForURL = await emoji();
    emojiForURL = emojiForURL[1];
  } while (emojiForURL === 'rand');
  emojiForURL = emojiForURL.replace('_', '.');
  await lib.discord.interactions['@1.0.1'].responses.create({
    token: `${context.params.event.token}`,
    content: `https://cdn.discordapp.com/emojis/${emojiForURL}`,
    response_type: 'CHANNEL_MESSAGE_WITH_SOURCE',
  });
} else if (context.params.event.data.custom_id.includes('_gif') || context.params.event.data.custom_id.includes('_webp')) {
  let emojiForURL = context.params.event.data.custom_id;
  emojiForURL = emojiForURL.replace('_', '.');
  await lib.discord.interactions['@1.0.1'].responses.create({
    token: `${context.params.event.token}`,
    content: `https://cdn.discordapp.com/emojis/${emojiForURL}`,
    response_type: 'CHANNEL_MESSAGE_WITH_SOURCE',
  });
} 
