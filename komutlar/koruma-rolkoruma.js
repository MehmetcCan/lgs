const Discord = require('discord.js')
const db = require('narcos-db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {
if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<:hayr:815620569520406548> | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
let prefix = ayarlar.prefix

  if (!args[0]) {
 message.channel.send(`<:hayr:815620569520406548> | Bir seçenek belirtin (aç/kapat) **Örnek Kullanım:** ${prefix}rol-koruma aç/kapat`)
  }
  if (args[0] === 'aç') {
    db.set(`rolk_${message.guild.id}`, "Aktif")
     message.channel.send(`<:evet:815620567947280434>  | Rol Koruma Başarıyla Açıldı!`)
  }
   if (args[0] === 'kapat') {
    db.delete(`rolk_${message.guild.id}`)
    message.channel.send(`<:evet:815620567947280434>  | Rol Koruma Başarıyla Kapatıldı!`)
  }
};
exports.conf = {
  aliases: ['rolkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'rol-koruma'
}; 
