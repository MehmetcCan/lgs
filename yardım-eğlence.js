const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('0a1aff')
.addField('Eğlence Menüsü',`
<a:mhmtmaviyldz:769144174531837964>**/golat** : Gol Atarsınız
<a:mhmtmaviyldz:769144174531837964>**/düello** : Arkadaşınızla Düello Atarsınız.
<a:mhmtmaviyldz:769144174531837964>**/ara155** : Polisi Ararsınız.
<a:mhmtmaviyldz:769144174531837964>**/gerigelsin** : Geri gelme olasılığına bakarsınız.
<a:mhmtmaviyldz:769144174531837964>**/kapaklaf** : Laf Sokarsınız.
<a:mhmtmaviyldz:769144174531837964>**/kuşdiliçeviri** : Yazdığınız Şeyi Kuş Diline Çevirir.
<a:mhmtmaviyldz:769144174531837964>**/bskutuaç** : Brawl Stars Da kutu Açarsınız.
<a:mhmtmaviyldz:769144174531837964>**/yılbaşı** : Yılbaşına Ne Kadar Kalmış Gösterir
<a:mhmtmaviyldz:769144174531837964>**/kartopu** : Etiketlediğiniz kişiye kar topu atarsınız.
<a:mhmtmaviyldz:769144174531837964>**/yumruk-at** : Etiketlediğiniz kişiye yumruk atarsınız
<a:mhmtmaviyldz:769144174531837964>**/adamasmaca** : Adam Asmaca Oyunu.
<a:mhmtmaviyldz:769144174531837964>**/avatar** : Avatarınızı Gösterir.
`) 
    .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['eğlence','Eğlence'],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  category: "eğlence",
    description: "Eğlence Komutları Gösterir."
};