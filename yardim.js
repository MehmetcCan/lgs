const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('Yardım Menüsü',`
<a:saaok:767016334830731314>**/eğlence** : Eğlence Komutları Açar
<a:saaok:767016334830731314>**/moderasyon** : Moderasyon Komutlarını Açar. 
<a:saaok:767016334830731314>**/kayıtyardım** : Kayıt Komutlarını Gösterir.
<a:saaok:767016334830731314>**/nsfwyardım** : NSFW Komutlarını Gösterir 😈
<a:saaok:767016334830731314>**/kullanıcı** : Kullanıcı Komutlarını Gösterir.
<a:saaok:767016334830731314>**/abone-yardım** : Abone Sistemini Ayarlarsınız.
<a:saaok:767016334830731314>**/sunucukur** : Kullanıcı Komutlarını Gösterir.
<a:saaok:767016334830731314>**/ayarlanabilir** : Ayarlana Bilir Komutları Gösterir.
<a:saaok:767016334830731314>**/çekiliş-sistemi** : Çekiliş Yaparsınız.
<a:saaok:767016334830731314>**/güvenlik** : Güvenlik Komutlarını Açar. <:gvenlik:815620575493095514>
<a:saaok:767016334830731314>**/premium-yardım** : Premium Komutları Gösterir. `) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};