const Discord = require('discord.js');
const data = require('narcos-db')

exports.run = async (client, message, args) => {// chimp 💕'b#0308
if(!message.member.hasPermission('MANAGE_ROLES')) return;
if(!args[0]) return message.channel.send(`Bu Komutu Kullanabilmek İçin Rolleri Yönet Yetkisine Sahip Olmalısız Ayrıca Doğru Kullanım : random-pp ayarla/sıfırla komutları şeklindedir.`)

  
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

// buranın altına komutları yazın  

if(args[0] === 'ayarla') {

const ayarlı = await data.fetch(`ppgif.${message.guild.id}`)
if(ayarlı) return message.channel.send(`Kanal zaten ayarlı.`)

if(!args[1]) return message.channel.send(`Bir kanalı etiketlemelisin.`)
let channel = message.mentions.channels.first()
if(!channel) return message.channel.send(`${args[1]}, isimli kanalı bu sunucuda bulamıyorum.`)

data.set(`ppgif.${message.guild.id}`, channel.id)
message.channel.send(`PP ve GİF fotoğrafların gönderileceği yer: ${channel} olarak ayarlandı.
Sıfırlamak için: random-pp sıfırla`)

} else if(args[0] === 'sıfırla') {
const ayarlı = await data.fetch(`ppgif.${message.guild.id}`)
if(!ayarlı) return message.channel.send(`Kanal zaten ayarlı değil :)`)

data.delete(`ppgif.${message.guild.id}`)
message.channel.send(`PP ve GİF fotoğrafların gönderileceği kanal sıfırlandı.
Ayarlamak için: random-pp ayarla #channel`) }
// buranın üstüne komutu yazın
} else { return message.channel.send(new Discord.MessageEmbed()
  .setDescription(`${message.author}, bu komut premium bir komuttur. Bu sunucu da premium bulunmamakta.`)
 .setFooter(``)
 .setTimestamp()
 .setTitle(`🔔 Bilgilendirme !`)
 .setColor(`YELLOW`)
 )
 } 
 };
 exports.conf = {
   enabled: true,
   guildOnly: true,
   aliases: ["random-pp","randompp","randomgif"],
   permLevel: 0
 }
 
 exports.help = {
   name: 'premiumtest'
  };