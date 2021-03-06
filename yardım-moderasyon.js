const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Yardımcı Komutlar',`
<a:mhmtmaviyldz:769144174531837964>**/yetkilerim** : Etiketlediğiniz kişinin yetkilerini gösterir. (yetkilerim) 
<a:mhmtmaviyldz:769144174531837964>**/sil** : Mesaj Siler sil <mesaj sayısı>
<a:mhmtmaviyldz:769144174531837964>**/ping** : Botun Pingini Gösterir
<a:mhmtmaviyldz:769144174531837964>**/davet** : Botun  Linkini Atar
<a:mhmtmaviyldz:769144174531837964>**/oylama** : Oylama Yaparsınız
<a:mhmtmaviyldz:769144174531837964>**/rolbilgi** : Etikelediğiniz Rol Hakkında Bilgileri Gösterir
<a:mhmtmaviyldz:769144174531837964>**/roles** : Sunucudaki Tüm Rolleri Gösterir.
<a:mhmtmaviyldz:769144174531837964>**/snipe** : En Son Silinen Mesajı Gösterir
<a:mhmtmaviyldz:769144174531837964>**/sunucubilgi** : Sunucu Bilgilerini Gösterir.
<a:mhmtmaviyldz:769144174531837964>**/sunucutanıt** : Sunucunuzu Tanıtır.
<a:mhmtmaviyldz:769144174531837964>**/rolver** : Etiketlediğiniz Kişiye Rol Verirsiniz
<a:mhmtmaviyldz:769144174531837964>**/rolal** : Etiketlediğiniz Kişinin Rolünü Alırsınız`)
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderasyon','mod'],
  permLevel: 0
};

exports.help = {
  name: "yardımcıkomutlar",
  category: "yardım",
  description: "Yardımcı Komutları Gösterir."
};