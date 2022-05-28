//Подключаем модуль для работы с RSS
const Parser = require('rss-parser')

//Подключаем клавиатуру (кнопки)
const { InlineKeyboard } = require('../buttons')

module.exports.CallbackHandler = (bot) => {
  bot.on('callback_query', async (ctx) => {
    const { callbackQuery } = ctx

    //Проверяем пришедшие данные. Если они соответствуют запросу RSS то предлагаем выбрать источник
    if (callbackQuery.data === 'listRss') {
      await ctx.editMessageText('Выбери источник 👇', InlineKeyboard.buttons_source())
    }

    //Код который выдает новости из Reddit
    if (callbackQuery.data === 'redditRss') {
      const parser = new Parser()

      let feed = await parser.parseURL('https://www.reddit.com/.rss');
      console.log(feed.title);

      const newsList = feed.items.map(item => item.title)

      const newsMessageText = newsList.join('\n\n')
      await ctx.editMessageText(`Новости с Reddit:\n\n${newsMessageText}`, InlineKeyboard.buttons_source())
    }
  })
}