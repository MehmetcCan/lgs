const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('Botumuza Destek Veren Sunucular',`
<a:saaok:767016334830731314>**B L 么 C K   #0.1K** : [Sunucuya Katıl](https://discord.gg/p5dHM8us3H)
<a:saaok:767016334830731314>**Ucuz_Prem** : [Sunucuya Katıl](https://discord.gg/7gebXZmFwK)
<a:saaok:767016334830731314>**Bilal Bey | Youtube** : [Sunucuya Katıl](https://discord.gg/kSzpmUPK5j)`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek','partnerler','destekçiler'],
  permLevel: 0
};

exports.help = {
  name: "destekçiler",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};