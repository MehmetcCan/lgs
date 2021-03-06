const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');//MHMTMehmetCan


exports.run = (client, message) => {
    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
    .setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setDescription(`**Electro Bot** | İstatistik Komutu`)
  .addField(`Bot Sahibi`, `<@730096504647188531>`, )
  .addField("Sunucu Sayısı ", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("Toplam Kullanıcı Sayısı ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Ping" , `${client.ws.ping}`, true)
  .addField("Discord.js Sürümü ", `${Discord.version}`, true)  
   .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/Vh5s8gW6KZ)`, true)
  .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=797873310000087050&scope=bot&permissions=2147483647)`, true)
  .addField(`Websitem`, `[Tıkla](http://tr.electro.ml)`, true)
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
    message.channel.send(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
//MHMT CODE SHARE & BOT LİST 