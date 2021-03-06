const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Ayarlanabilir Komutlar',`
<a:mhmtmaviyldz:769144174531837964>**/prefix** : Sunucudaki Botun Prefixini Değiştirirsiniz.
<a:mhmtmaviyldz:769144174531837964>**/sa-as** : Selam Verince As Demesini Açarsınız.
<a:mhmtmaviyldz:769144174531837964>**/hg-bb** : Resimli Hoşgeldin BB Sistemidir
<a:mhmtmaviyldz:769144174531837964>**/sayaç** : Sunucu Hedefini Ayarlar.
<a:mhmtmaviyldz:769144174531837964>**/mute** : Gelişmiş Mute Sistemidir.
<a:mhmtmaviyldz:769144174531837964>**/random-pp** : Belirli Bir Kanala Sürekli Random PP Atar.
<a:mhmtmaviyldz:769144174531837964>**/otorol** : Sunucuya Birisi Katılınca Otomatik Rol Verir`)
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayarlanabilir','ayarlanabilir-komutlar'],
  permLevel: 0
};

exports.help = {
  name: "ayarlanabilir-komutlar",
  category: "yardım",
  description: "Yardımcı Komutları Gösterir."
};