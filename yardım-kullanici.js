const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('Yardım Menüsü',`
<a:saaok:767016334830731314>**/afk** : AFK Olursunuz
<a:saaok:767016334830731314>**/avatar** : Avatarınızı  Gösterir
<a:saaok:767016334830731314>**/deprembilgi** : En Son olan 10 Depremi Gösterir
<a:saaok:767016334830731314>**/havadurumu** : Yaşadığınız Yerin Havadurumunu Söyler
<a:saaok:767016334830731314>**/havalıdurum** : Durumluk Laflar Söyler
<a:saaok:767016334830731314>**/istek** : Bot İçin Öneri/isteklerinizi Söylersiniz
<a:saaok:767016334830731314>**/kapaklaf** : Laf Sokar
<a:saaok:767016334830731314>**/not-sistemi** : Not Tutarsınız.`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  category: "kullanıcı",
    description: "kullanıcı Komutları Gösterir."
};