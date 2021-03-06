const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("narcos-db");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Bir kanal etiketleyin Veya hg-bb-sıfırla yazarak Sıfırlayın");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  //var i = db.set(`capsE_${message.guild.id}`, "acik")
  message.channel.send(`:white_check_mark: | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hg-bb","hoşgeldin-baybay","hoşgeldin-sistemi"],
  permLevel: 0
};

exports.help = {
  name: "hg-bb-ayarla",
  description: "Gelen Giden Kanalını Ayarlar.",
  usage: "hg-bb-ayarla <#kanal>"
};