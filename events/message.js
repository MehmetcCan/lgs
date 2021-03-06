const ayarlar = require("../ayarlar.json");
const db = require('narcos-db');//geldinmi ?

module.exports = async message => {
  let client = message.client;
  //Değişen Prefix
  let p = db.fetch(`prefix_${message.guild.id}`)
  let prefix = ayarlar.prefix;
  if (p) prefix = p;
  //Değişen Prefix Bitiş
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
 
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`karaliste_${message.author.id}`)) return message.channel.send('<:hayr:775299930952171540> | Benim kara listemde bulunuyorsun! Bunun Yanlışlıkla Olduğunu Düşünüyorsan Destek Sunucumuza Gel')
    cmd.run(client, message, params, perms);
  }
};