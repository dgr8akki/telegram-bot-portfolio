function botRouteSetup(bot) {
  // Just to ping!
  bot.on('message', function onMessage(msg) {
    bot.sendMessage(msg.chat.id, 'I am alive on Heroku!');
  });
  
  // Matches /education
  bot.onText(/\/education/, msg => {
    bot.sendMessage(msg.chat.id, 'Apan bohot pada likha hai');
  });

  // Matches /work
  bot.onText(/\/work/, function onAudioText(msg) {
    bot.sendMessage(msg.chat.id, 'Apan bohot badia kama rha h Dublin m');
  });

  // Matches /links
  bot.onText(/\/links/, function onLoveText(msg) {
    bot.sendMessage(msg.chat.id, 'https://www.aakashpahuja.com');
  });

  // Matches /echo [whatever]
  bot.onText(/\/echo (.+)/, function onEchoText(msg, match) {
    const resp = match[1];
    bot.sendMessage(msg.chat.id, resp);
  });

  // Matches /downloadreel
  bot.onText(/\/downloadreel/, function onLoveText(msg) {
    bot.sendMessage(msg.chat.id, 'https://www.aakashpahuja.com');
  });

  // Matches /editable
  bot.onText(/\/editable/, function onEditableText(msg) {
    const opts = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Edit Text',
              // we shall check for this value when we listen
              // for "callback_query"
              callback_data: 'edit',
            },
          ],
        ],
      },
    };
    bot.sendMessage(msg.from.id, 'Original Text', opts);
  });

  // Handle callback queries
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;
    const opts = {
      chat_id: msg.chat.id,
      message_id: msg.message_id,
    };
    let text;

    if (action === 'edit') {
      text = 'Edited Text';
    }

    bot.editMessageText(text, opts);
  });
}

module.exports = botRouteSetup;
