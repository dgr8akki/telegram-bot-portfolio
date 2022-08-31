require('dotenv').config();
const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const TelegramBot = require('node-telegram-bot-api');

const options = {
  webHook: {
    port: process.env.PORT,
  },
};

const url =
  process.env.APP_URL || 'https://dgr8akki-tg-bot-portfolio.herokuapp.com:443';
const bot = new TelegramBot(TOKEN, options);

bot.setWebHook(`${url}/bot${TOKEN}`);

require('./routes')(bot);
