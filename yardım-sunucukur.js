const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('Sunucu Kurma Menüsü',`
<a:saaok:767016334830731314>**/sunucukur-basit** : Basit Sunucu Kurarsınız.
<a:saaok:767016334830731314>**/sunucukur-normal** : Normal Sunucu Kurarsınız
<a:saaok:767016334830731314>**/sunucukur-gelişmiş** : Gelişmiş Sunucu Kurarsınız
<a:saaok:767016334830731314>**~~/sunucukur-vip~~** : Vip Sunucusu Kurarsınız.
<a:saaok:767016334830731314>**~~/sunucukur-rewards~~** : Reward Sunucusu Kurarsınız
<a:saaok:767016334830731314>**~~/sunucukur-premium~~** : Premium Sunucusu Kurarsınız.`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunuckur-yardım',"sunucukur"],
  permLevel: 0
};

exports.help = {
  name: "sunucukur-yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};