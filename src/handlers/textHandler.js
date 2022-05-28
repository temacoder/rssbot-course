const { InlineKeyboard } = require('../buttons')

module.exports.TextHandler = (bot) => {
  bot.on('message', (ctx) => {
    // resend existing file by file_id
   console.log('message ', ctx.update.message.web_app_data)
  })

}