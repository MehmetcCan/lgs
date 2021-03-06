const Discord = require('discord.js');
const db = require('narcos-db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
  let prefix = await require('narcos-db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:hayr:815620569520406548> | Bu Komutu Kullana Bilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`, 'kapali')
    message.channel.send(`<:evet:815620567947280434> | Capslock Engelleme Sistemi Kapatıldı `)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`<:evet:815620567947280434> | Capslock Engelleme Sistemi Başarıyla Aktif Edildi`)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslockengel','capslock','capslock-engel','cl'],
  permLevel: 3
};
exports.help = {
  name: 'capsengel',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};