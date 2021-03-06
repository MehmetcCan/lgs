const Discord = require('discord.js');
const db = require('narcos-db')
exports.run = async(client, message, args) => { 
  
  
  let rolkoruma = await db.fetch(`rolk_${message.guild.id}`)
  let kanalkoruma = await db.fetch(`kanalk_${message.guild.id}`)
  let capsengel = await db.fetch(`capslock_${message.guild.id}`)
  let reklamengel = await db.fetch(`reklamFiltre_${message.guild.id}`)
  let küfürengel = await db.fetch(`küfürengelmesaj_${message.guild.id}`)

  
  let kontrol2;
  if(rolkoruma == null) kontrol2 = '<:hayr:815620569520406548>'
  else kontrol2 = '<:evet:815620567947280434> | '+ rolkoruma
  
  let kontrol3;
  if(kanalkoruma == null) kontrol3 = '<:hayr:815620569520406548>'
  else kontrol3 = '<:evet:815620567947280434> | '+ kanalkoruma

  let kontrol6;
  if(reklamengel == null) kontrol6 = '<:hayr:815620569520406548>'
  else kontrol6 = '<:evet:815620567947280434> | '+ reklamengel

 let kontrol7;
  if(küfürengel== null) kontrol7 = '<:hayr:815620569520406548>'
  else kontrol7 = '<:evet:815620567947280434> | '+ küfürengel
  
  let kontrol4;
  if(capsengel == null) kontrol4 = '<:hayr:815620569520406548>'
  else kontrol4 = '<:evet:815620567947280434> | '+ capsengel
  let ayarlar = new Discord.MessageEmbed()
  .setTitle('<a:ayarlar:815620596669874176> | Sunucu Korumaları')
  .setDescription('')
  .addField('Rol koruma::', kontrol2, true)
  .addField('Kanal koruma:', kontrol3, true)
  .addField('Caps engel:', kontrol4, true)
  .addField('Reklam engel:', kontrol6, true)
  .addField('Küfür engel:', kontrol7, true)
  .addField('Göstergeler', '<:evet:815620567947280434> : **Aktif** \n <:hayr:815620569520406548> : **Devre Dışı**')
  .setColor('bcaa07')
  message.channel.send(ayarlar)
 

 };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'koruma-ayarlar',
  description: 'boşt', 
  usage: 'antiraid'
};