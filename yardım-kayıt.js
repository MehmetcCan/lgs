const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Kayıt Yardım Menüsü',`
<a:saaok:767016334830731314>**/kayıtçırol** : Kayıt Rolünü  Ayarlarsınız
<a:saaok:767016334830731314>**/kayıtçırol sıfırla** : Kayıt Rolünü  Ayarlarsınız
<a:saaok:767016334830731314>**/alınacakrol** : Kayıt olduktan sonra üyeden alınacak rolü ayarlarsınız
<a:saaok:767016334830731314>**/alınacakrol sıfırla** : Kayıtsız Rolünü Sıfırlarsınız.
<a:saaok:767016334830731314>**/kayıtçı-ver** : Kayıt Görevlisini Ayarlarsınız
<a:saaok:767016334830731314>**/kayıtkanal** : Kayıt Olunucak Kanalı Ayarlarsınız 
<a:saaok:767016334830731314>**/kayıtkanal sıfırla** : Kayıt Olunucak Kanalı Sıfırlarsınız
<a:saaok:767016334830731314>**/kız-rol** : Kız Rolünü Ayarlarsınız 
<a:saaok:767016334830731314>**/kız-rol sıfırla** : Kız Rolünü Sıfırlarsınız 
<a:saaok:767016334830731314>**/erkek-rol** : Erkek Rolünü Ayarlarsınız
<a:saaok:767016334830731314>**/erkek-rol sıfırla** : Erkek Rolünü Sıfırlarsınız
<a:saaok:767016334830731314>**/k** : Kız Üye Kayıt Eder
<a:saaok:767016334830731314>**/e** : Erkek Üye Kayıt Eder`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-yardım','kayıtyardım','yardımkayıt','kayıtbilgi'],
  permLevel: 0
};

exports.help = {
  name: "kyardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};