const Discord = require('discord.js');
const data = require('narcos-db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setTitle(`<a:saaok:767016334830731314> Web Sitemiz`)
.setDescription(`**Botumuzun Sitesinden Yardım Alabilirsin**
[Web Sitemiz](http://tr.electro.ml)
`));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'site'
};