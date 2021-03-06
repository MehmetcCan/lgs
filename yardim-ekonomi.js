const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('Ekonomi Menüsü',`
<a:saaok:767016334830731314>**/ebilgiler** : Ekonomi Bilgilerinizi Gösterir
<a:saaok:767016334830731314>**/ecüzdan** : Cüzdanınızı Gösterir.
<a:saaok:767016334830731314>**/günlük-para** : Günlük Paranızı Alırsınız.
<a:saaok:767016334830731314>**/hesap-oluştur** : Banka Hesabı Oluşturursunuz.
<a:saaok:767016334830731314>**/hesap-sil** : Banka Hesabınızı Silersiniz.
<a:saaok:767016334830731314>**/kasa-bilgi** : Kasaların Bilgilerini Görürsünüz.
<a:saaok:767016334830731314>**/kasalar** : Kasaları Gösterir.
<a:saaok:767016334830731314>**/para-gönder** : Başka Bir Kişiye Para Gönderirsiniz.
<a:saaok:767016334830731314>**/kasaaç** : Kasa Açıp Paranıza Para katabilirsiniz.`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eyardım',"ekonomiyardım","ekonomi-yardım","yardım-ekonomi"],
  permLevel: 0
};

exports.help = {
  name: "eyardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};