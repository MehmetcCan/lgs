const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('Premium Menüsü',`
<a:saaok:767016334830731314>**/random-pp** : Belirli Bir Kanala Otomatik Profil Fotoğrafı Atar.
<a:saaok:767016334830731314>**/kayıt-gelengiden yardım** : sunucuya birisi katılınca otomatik olarak
<a:saaok:767016334830731314>**/premium-sayaç yardım** : Premium Sayaçı Ayarlarsınız. `) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['premium-yardım',"yardım-premium"],
  permLevel: 0
};

exports.help = {
  name: "premium-yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};