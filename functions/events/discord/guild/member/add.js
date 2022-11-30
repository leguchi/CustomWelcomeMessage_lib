const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const random = require('./../../../../../helper/randomize');
const date = require('./../../../../../helper/date');
const emoji = require('./../../../../../helper/emoji');

// let possibleMsgs = process.env.MESSAGES.split(',$');
let randomMsg = await random(process.env.MESSAGES, ',$');
let currentDate = await date();
let randomEmoji = await emoji();

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": process.env.WELCOME_CHANNEL_ID,
  "content": `:arrow_right: ${randomMsg}**<@${context.params.event.user.id}>**. ${currentDate}`,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "label": `Wave to say hi!`,
          "custom_id": randomEmoji[1],
          "disabled": false,
          "emoji": randomEmoji[0],
          "type": 2
        }
      ]
    }
  ]
});