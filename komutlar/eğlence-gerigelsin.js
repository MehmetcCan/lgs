const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
    let sonuç = ["``%10``\nZor ama, imkansız değil. <a:ur_kurbagyagmur:800348103001243718>","``%20``\nGelmez be kardeşim uğraşma.. <:alyanayc:796850020019732480>","``%40``\nGeledebilir, gelmeyedebilir. <a:ur_uzayldans:800347886805450814>","``%60``\nGelicek sanırım ya. <a:ur_uzayldans:800347886805450814>","``%80``\nGelmesi lazım artık. <a:slm:793545352770879488> ","``%100``\nGelmiş bile, bir dm kutusuna bak derim. <a:mhmtkalpgg:769144155707670531>"];
    let result = Math.floor((Math.random() * sonuç.length));
    let gerigelsin = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .addField("Gelir mi acaba?", sonuç[result]);
  
    message.channel.send(gerigelsin);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["gerigelsin"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'gerigelsin',
    description: 'gerigelsin',
    usage: 'gerigelsin'
  };