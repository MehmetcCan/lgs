const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
var db = require("narcos-db");

exports.run = function(client, message, embed, params) {
    let prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : ayarlar.prefix 
  const bymayfe = new Discord.MessageEmbed()
  .setTitle("PİNGCİ AMCA")
  .setDescription('En İyi Hızı Yapmaya Çalışıyorum...')
  .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL())
  .addField('Pingim ```'+ client.ws.ping +"``` ms!","**Performansımı Daha İyi Bir Şekilde Görmek İstersen = ||" + prefix + "speedtest||**");
    message.channel.send(bymayfe);

};   

   

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p', 'ms'],
  permLevel: 0 
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};