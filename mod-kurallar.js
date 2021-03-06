const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let prefix = '-'
let mhmt = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setColor('BLACK')
.addField('Sunucu - Kuralları',`
**:white_small_square: Reklam Sunucu İçi Yasaktır. (Yetkililere bildirmelisiniz.)**

**:white_small_square: Ses & Chat odalarında Küfür, Troll, Rahatsız etmek & Bass Yasaktır.**

**:white_small_square: Kişisel sorunlarınızı sunucuya taşımak, Düzeni bozmak, Çıkan tartışmayı uzatmak Yasaktır.**

**:white_small_square: Din, dil, ırk, Cinsiyetçilik ayrımı Yasak.**

**:white_small_square: Cinsel içerikli görseller paylaşmak Yasaktır.**

**:white_small_square: Spam, flood ve caps Yasaktır.**

> **<a:mhmtraptiye:758594681587105812> | Her kural yazılı şekilde belirtilmez. Doğruyu yanlışı ayırt edebilmelisiniz.**
> **<a:mhmtraptiye:758594681587105812> | Sunucuya Kayıt Olan Tüm Üyeler İçin Kurallar Okunmuş sayılacaktır, Teşekkürler.**`)
.setImage("")
.setThumbnail(client.user.avatarURL())
message.channel.send(mhmt)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurallar','kural'],
  permlevel: 0
};
exports.help = {
  name: 'kurallar'
};