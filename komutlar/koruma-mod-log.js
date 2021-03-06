const Discord = require('discord.js')
const db = require('narcos-db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:hayr:815620569520406548> | Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`modlog_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(new Discord.MessageEmbed().setDescription(`<:hayr:815620569520406548> | Modlog Kanalı Zaten ayarlı değil`).setColor("7f0505"));
    
    db.delete(`modlog_${message.guild.id}`)
   message.channel.send(new Discord.MessageEmbed().setDescription(`<:evet:815620567947280434> | ModLog Kanalı başarıyla sıfırlandı`).setColor("046b07"));

    return
  }
  
if (!logk) return message.channel.send(new Discord.MessageEmbed().setDescription(`<:hayr:815620569520406548> | Mod log kanalı olarak ayarlacağım kanalı belirt!`).setColor("7f0505"));
 

db.set(`modlog_${message.guild.id}`, logk.id)

message.channel.send(new Discord.MessageEmbed().setDescription(`<:evet:815620567947280434> | Mod-Log kanalı başarıyla ${logk} olarak ayarlandı`).setColor("046b07"));

console.log(`Komut Başarıyla ${message.author.username} Tarafından kullanıldı`)
};


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0 ,
  kategori:'moderasyon'
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};