const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const chrome = new Discord.MessageEmbed()
  .setTitle("Electro Bot |  Linkleri ")
  .setColor("RANDOM")
    .addField("<a:saaok:767016334830731314> **Botun Sahibi**", "<@!730096504647188531>| MHMTMehmetCan ")
    .addField("**<a:saaok:767016334830731314> Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/Vh5s8gW6KZ)", )
    .addField("**<a:saaok:767016334830731314>  Linki**", " [Botu  Et](https://tr.mhmtbotlist.cf/bot/797873310000087050)", )
      .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(chrome);   //DevTR
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: '',
};