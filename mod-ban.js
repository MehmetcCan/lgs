const Discord = require("discord.js");
const db = require("narcos-db");
module.exports.run = async (bot, message, args) => {
  let prefix = "!";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("Ne yazık ki bu komutu kullanmaya yetkin yok. <a:mhmtuyar:757535140866949120> ")
      .setColor("BLACK");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen sunucudan yasaklanacak kişiyi etiketleyiniz! <a:mhmtuyar:757535140866949120> ")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL())
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${u} Adlı şahsın yasaklanmasını onaylıyor musunuz? <:ban:755396697366200371>  `)
    .setFooter(`bot.user.username, bot.user.avatarURL()`);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu! <a:mhmtuyar:757535140866949120> "));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(`
          Birileri Yargılandı ! ${u} Sunucudan Banlandı <:ban:755396697366200371> 
        `);

        message.guild.member(u, 2).ban();
      }
    });
  });
};

module.exports.conf = {
  aliases: [],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "ban",
  description: "ban",
  usage: "ban"
};