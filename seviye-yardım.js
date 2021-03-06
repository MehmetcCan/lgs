const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
  .setTitle("Electro | Seviye Sistemi")
  .setURL("https://discord.com/oauth2/authorize?client_id=796460091334590525&scope=bot&permissions=2147483647")
  .setDescription('')
  .setColor('#FF7F00')
  
.addField("<a:mhmtmaviyldz:769144174531837964>** /seviye-ayarlar**", "Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.")
.addField("<a:mhmtmaviyldz:769144174531837964>**/seviye-rol** ", "İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.")
.addField("<a:mhmtmaviyldz:769144174531837964>** /seviye-sıfırla** ", "Mevcut Seviye Sistemini Sıfırlar.")
  .addField("<a:mhmtmaviyldz:769144174531837964>**/seviye-sınır** ", "Maksimum Kazanılanabilecek Seviyeyi Belirler.")
  .addField("<a:mhmtmaviyldz:769144174531837964>**/seviye-xp** ", "Bir Mesaj Başına Verilecek Xp yi ayarlar.")
  .addField("<a:mhmtmaviyldz:769144174531837964>** /seviye-rütbeler** ", "Hangi Seviye de Rol Verilecek Onu Gösterir.")
  .setImage('https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye yardım',"seviye-yardım","seviye-sistemi"],
  permLevel: 4
};

exports.help = {
  name: 'seviye yardım',
  description: 'seviye yardım',
  usage: 'seviye yardım'
};