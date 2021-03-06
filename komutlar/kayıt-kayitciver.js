const discord = require('discord.js')
const db = require('narcos-db')

exports.run = async(client, message, args) => {
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!kayıtçı) return message.channel.send(`Kayıt Görevlisi Rolü Ayarlanmadığı İçin Bu Komudu Kullanamazsınız ! `)
if (!member) return message.channel.send(`Kayıt Görevlisi Rolü Vereceğiniz Kullanıcıyı Belirtiniz ! `)

member.roles.add(kayıtçı) 
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Kayıtçı Rolü Verildi `)
.setColor('BLACK')
.setDescription(`${member} Adlı Kullanıcıya Kayıtçı Rolü Verildi ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
 db.set(`kayıtsayı_${member.id}`, 1) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['kayıtgver','kayıtçı-ver'],
  permlevel: 0
}
exports.help = {
  name: 'kayıtçı-ver',
  description: 'kayıtçı rolü verir',
  usage: '!kayıtçı-ver @kullanıcı'
}