  
const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Electro | Not Sistemi ',`
<a:mhmtmaviyldz:769144174531837964>**/notlarım** : Tüm  Notlarınızı Gösterir
<a:mhmtmaviyldz:769144174531837964>**/not-al1** : 1. Notunuzu Gösterir.
<a:mhmtmaviyldz:769144174531837964>**/not-al2** : 2. Notunuzu Gösterir.
<a:mhmtmaviyldz:769144174531837964>**/not-al3** : 3. Notunuzu Gösterir.
<a:mhmtmaviyldz:769144174531837964>**/not-al4** : 4. Notunuzu Gösterir.
<a:mhmtmaviyldz:769144174531837964>**/not-al5** : 5. Notunuzu Gösterir.
**🗑 Silme İşlemi 🗑**
<a:mhmtmaviyldz:769144174531837964>**/not-sil1** : 1. Notunuzu Siler.
<a:mhmtmaviyldz:769144174531837964>**/not-sil2** : 2. Notunuzu Siler.
<a:mhmtmaviyldz:769144174531837964>**/not-sil3** : 3. Notunuzu Siler.
<a:mhmtmaviyldz:769144174531837964>**/not-sil4** : 4. Notunuzu Siler.
<a:mhmtmaviyldz:769144174531837964>**/not-sil5** : 5. Notunuzu Siler.
  `)
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['not','not-sistemi'],
  permLevel: 0
};

exports.help = {
  name: "not-sistemi",
  category: "notsisitemi",
  description: "Yardımcı Komutları Gösterir."
};