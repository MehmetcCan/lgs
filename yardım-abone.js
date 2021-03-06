const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Abone Sistemi',`
<a:saaok:767016334830731314>**/abonerol** : Abone Rolünü Ayarlarsınız
<a:saaok:767016334830731314>**/abone** : Etiketlediğiniz Kişiye Abone Rolü Verirsiniz
`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-yardım','aboneyardım','yardımabone'],
  permLevel: 0
};

exports.help = {
  name: "ayardım",
  category: "ayardım",
    description: "Abone Komutları Gösterir."
};