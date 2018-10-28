const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const prefix = (cfg.prefix);
bot.on('ready',function () {
  console.log(¨c'est partie !!!¨)
  bot.user.setActivity(¨Regarder Loadishu_u¨).catch(console.error)
));



bot.login(cfg.token);
