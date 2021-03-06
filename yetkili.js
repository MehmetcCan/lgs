const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Yetkili Yardım Menüsü',`
<a:mhmtmaviyldz:769144174531837964>**/rolal** : Etiketlediğiniz Kişinin Rolünü Alır
<a:mhmtmaviyldz:769144174531837964>**/rolver** : Etiketlediğiniz Kişiye Rol Veririr
<a:mhmtmaviyldz:769144174531837964>**/temizle** : Botun pingini gösterir
<a:mhmtmaviyldz:769144174531837964>**/ban** : Botun pingini gösterir
<a:mhmtmaviyldz:769144174531837964>**/kick** : Botun pingini gösterir
<a:mhmtmaviyldz:769144174531837964>**/banlist** : Botun pingini gösterir
<a:mhmtmaviyldz:769144174531837964>**/nuke** : Botun pingini gösterir
<a:mhmtmaviyldz:769144174531837964>**/capslockengel** : Botun pingini gösterir
<a:mhmtmaviyldz:769144174531837964>**/güvenlik** : Botun pingini gösterir
<a:mhmtmaviyldz:769144174531837964>**/küfür-engelle** : Botun pingini gösterir
`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-yardım','kullanıcıyetkili','yetkilikullanıcı'],
  permLevel: 0
};

exports.help = {
  name: "yetkili-yardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};