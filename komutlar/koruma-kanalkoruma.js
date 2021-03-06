const Discord = require('discord.js')
const db = require('narcos-db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<:hayr:815620569520406548> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`<:hayr:815620569520406548> | Lütfen bir seçenek belirtiniz (aç/kapat) **Örnek Kullanım:** ${prefix}kanal-koruma aç/kapat`)
  }
  if (args[0] === 'aç') {
    db.set(`kanalk_${message.guild.id}`, "Aktif")
     message.channel.send(`<:evet:815620567947280434> | Kanal Koruma Başarıyla Açıldı!`)
  }
   if (args[0] === 'kapat') {
    db.delete(`kanalk_${message.guild.id}`)
    message.channel.send(`<:evet:815620567947280434> | Kanal Koruma Başarıyla Kapatıldı!`)
  }
};
exports.conf = {
  aliases: ['kanalkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
