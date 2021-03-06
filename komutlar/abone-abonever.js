const discord = require('discord.js')
const db = require('narcos-db')

exports.run = async(client, message, args) => {
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`yönetici\`" yetkisine sahip olmalısın`);

let abone = db.fetch(`abonerol_${message.guild.id}`)
let member = message.mentions.members.first();
if (!abone) return message.channel.send(`Abone Rolü Ayarlanmadığı İçin Bu Komudu Kullanamazsınız ! `)
if (!member) return message.channel.send(`Abone Rolü Vereceğiniz Kullanıcıyı Belirtiniz ! `)

member.roles.add(abone) 
const ayarlandı = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Abone Rolü Verildi `)
.setColor('ff0a0a')
.setDescription(`${member} Adlı Kullanıcıya Abone Rolü Verildi ! `)
.setThumbnail(client.user.avatarURL)
.setFooter(`Komut ${message.author.tag} Tarafından Kullanıldı ! `)
message.channel.send(ayarlandı)
 db.set(`abonesayı_${member.id}`, 1) 
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['a','abone'],
  permlevel: 0
}
exports.help = {
  name: 'abone-ver',
  description: 'abone rolü verir',
  usage: '!a @kullanıcı'
}