const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
  
let yardım = new Discord.MessageEmbed() 
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('PURPLE')
.addField(`**NSFW Menüsü**`,`

• NSFW Kanal seçeneği açık olmadan NSFW komutları kullanılamaz.

• Eğer +18 yaşından büyük iseniz Kanalı Düzenle > Genel Görünüm'e girin ve oradaki NSFW Kanal seçeneğini aktif ederek NSFW komutlarını kullanabilirsiniz.

\`/4k\` = Rastgele 4K NSFW fotoğrafı gösterir.
\`/porno-gif\` = Rastgele Porno Gifi gösterir.
\`/anal\` = Rastgele Gif veya fotoğraf sevişmelerini gösterir.
\`/pussy\` = Rastgele pussy fotoğrafı gösterir.
\`/ass\` = Rastgele Ass fotoğrafları gösterir.
\`/thigh\` = Rastgele Tayt fotoğrafı gösterir.
\`/solo\` = Rastgele solo fotoğrafı gösterir.
\`/anime-wallpaper\` = Rastgele Anime Wallpaper fotoğrafı gösterir.
\`/hentai-gif\` = Rastgele hentai gif atar.
\`/hkitsune\` = Rastgele Kedi veya Kurt Anime fotoğrafları gösterir.
\`/pussy-art\` = Rastgele pussy-art fotoğrafları gösterir.
`)
 .setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
 .setColor('0a1aff')
 message.channel.send(yardım) 
  
}; 
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["nsfw","nsfwyardım"], 
  permLevel: 0
};
exports.help = {
  name: 'nsfw'
};