const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '/'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('<:gvenlik:815620575493095514> | Sunucu Koruma Menüsü',`
<a:saaok:767016334830731314>**/küfür-engel** : Birisi Küfür Ederse Engeller
<a:saaok:767016334830731314>**/rol-koruma** : Birisi Rol Silerse Geri Getirir
<a:saaok:767016334830731314>**/kanal-koruma** : Birisi Kanal Silerse Geri Getiri
<a:saaok:767016334830731314>**/capslock-engel** : Büyük Harfle Yazmayı Engeller
<a:saaok:767016334830731314>**/mod-log** : Sunucuda Olup Bitenleri Kanala Atar
<a:saaok:767016334830731314>**/koruma-ayarlar** : Sunucu Koruma Ayarları`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım-güvenlik',"güvenlik","yardımgüvenlik","güvenlik-yardım"],
  permLevel: 0
};

exports.help = {
  name: "koruma-yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};