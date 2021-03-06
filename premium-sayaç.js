const Discord = require('discord.js');
const db = require('narcos-db');

  exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR"))
     return message.reply("Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın'")

  
  let açıkmı = await db.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

// buranın altına komutları yazın  
module.exports.run = async(client, message, args) => {
var p = "/"
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir komut belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım\``))
if(args[0] === "sıfırla"){
db.delete(`sayackanali_${message.guild.id}`)
db.delete(`sayachedefi_${message.guild.id}`)
db.delete(`sayacmesaji_${message.guild.id}`)
db.delete(`sayacturu_${message.guild.id}`)
db.delete(`sayaccikis_${message.guild.id}`)
db.delete(`sayaccikistur_${message.guild.id}`)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Sayaç veritabanı sıfırlandı!`))
};
if(args[0] === "mesaj"){
var kanal = db.fetch(`sayackanali_${message.guild.id}`)
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("İlk önce sayaç kanalını ayarlamalısın!"))
if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir tür belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım mesaj\``))
if(args[1] === "embed"){
var text = args.slice(2).join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir mesaj belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım mesaj\``))
db.set(`sayacturu_${message.guild.id}`, "embed")
db.set(`sayacmesaji_${message.guild.id}`, text)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Sayaç mesajı embed olarak ayarlandı!`))
};
if(args[1] === "normal"){
var text = args.slice(2).join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir mesaj belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım mesaj\``))
db.delete(`sayacturu_${message.guild.id}`)
db.set(`sayacmesaji_${message.guild.id}`, text)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Sayaç mesajı ayarlandı!`))
}};
if(args[0] === "yardım"){
if(!args[1]){const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle('Electro Bot | Premium Sistemi')
.setDescription(`
**${p}sayaç ayarla #kanal hedef** : Sayaç'ı ayarlar.
**${p}sayaç sıfırla** : Sayaç'ı sıfırla.
**${p}sayaç mesaj** : Sayaç mesajını ayarlar.
(Ekstra bilgi için **${p}sayaç yardım mesaj**)
**${p}sayaç bilgi** : Bilgi Paneli
**${p}sayaç yardım** : Yardım Menüsü
`)
.setFooter("Electro Bot | Premium Sistemi")
return message.channel.send(embed)
};
if(args[1] === "mesaj"){
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle('Electro Bot | Premium Sistemi')
.setDescription(`
**${p}sayaç mesaj embed <yazı>** : Sayaç mesajını embed olarak ayarlar.
**${p}sayaç mesaj normal <yazı>** : Sayaç mesajını ayarlar.
**${p}sayaç çıkış embed <yazı>** : Sayaç çıkış mesajını embed olarak ayarlar.
**${p}sayaç çıkış normal <yazı>** : Sayaç çıkış mesajını ayarlar.
Üyeden bahsetmek için: \`{üye}\`
Sunucudan bahsetmek için: \`{sunucu}\`
Hedeften bahsetmek için: \`{hedef}\`
Hedefe ulaşmaya kalan kişi sayısından bahsetmek için: \`{fark}\`
Sunucudaki kişi sayısından bahsetmek için: \`{toplam}\` 
**DİKKAT!** Bu kısayollar sadece 2'şer kere kullanılabilir!
`)
.setFooter("Electro Bot | Premium Sistemi")
return message.channel.send(embed)
}
};
if(args[0] === "ayarla"){
var kanal = message.mentions.channels.first();
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir kanal belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım\``))
var sayı = args.slice(2).join('')
if(!sayı) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir sayı belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım\``))
if(isNaN(sayı)) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir sayı belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım\``))
if(sayı > message.guild.memberCount){
db.set(`sayackanali_${message.guild.id}`, kanal.id)
db.set(`sayachedefi_${message.guild.id}`, sayı)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Sayaç kanalı <#${kanal.id}> sayaç hedefi ise \`${sayı}\` olarak ayarlandı!`))
}
else  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Lütfen ${message.guild.memberCount} sayısından daha fazla bir sayı söyleyiniz.`))
};
if(args[0] === "bilgi"){
var kanal = db.fetch(`sayackanali_${message.guild.id}`)
if(!kanal){
	var kanal = "KANAL AYARLANMAMIŞ!"
}
var hedef = db.fetch(`sayachedefi_${message.guild.id}`)
if(!hedef){
	var hedef = "HEDEF AYARLANMAMIŞ!"
}
var mesaj = db.fetch(`sayacmesaji_${message.guild.id}`)
if(!mesaj){
	var mesaj = "MESAJ AYARLANMAMIŞ!"
} 
var tür = db.fetch(`sayacturu_${message.guild.id}`)
if(!tür){
	var tür = "Normal"
}
var mesaj1= db.fetch(`sayaccikis_${message.guild.id}`)
if(!mesaj1){
	var mesaj1 = "MESAJ AYARLANMAMIŞ!"
}
const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle(message.guild.name)
.setDescription(`
Sayaç Kanalı : \`${kanal}\`

Sayaç Hedefi : \`${hedef}\`

Sayaç Mesajı : \`${mesaj}\`

Sayaç Mesajı Türü : \`${tür}\`

Çıkış Mesajı : \`${mesaj1}\`
`)
.setFooter("Electro Bot | Premium")
return message.channel.send(embed)
};
if(args[0] === "çıkış"){
var kanal = db.fetch(`sayackanali_${message.guild.id}`)
if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setDescription("İlk önce sayaç kanalını ayarlamalısın!"))
if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir tür belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım mesaj\``))
if(args[1] === "embed"){
var text = args.slice(2).join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir mesaj belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım mesaj\``))
db.set(`sayaccikistur_${message.guild.id}`, "embed")
db.set(`sayaccikis_${message.guild.id}`, text)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Sayaç çıkış mesajı embed olarak ayarlandı!`))
};
if(args[1] === "normal"){
var text = args.slice(2).join(' ')
if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, bir mesaj belirtmen gerekli! Eğer sayaç'ın kullanımı bilmiyorsanız: \`${p}sayaç yardım mesaj\``))
db.delete(`sayaccikistur_${message.guild.id}`)
db.set(`sayaccikistur_${message.guild.id}`, text)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Sayaç çıkış mesajı ayarlandı!`))
}};
};
// buranın üstüne komutu yazın
} else { return message.channel.send(new Discord.MessageEmbed()
	.setDescription(`${message.author}, bu komut premium bir komuttur. Bu sunucu da premium bulunmamakta.`)
   .setFooter(``)
   .setTimestamp()
   .setTitle(`🔔 Bilgilendirme !`)
   .setColor(`YELLOW`)
   )
   } 
   };
   module.exports.conf = {aliases: [], permLevel: 3};
   module.exports.help = {name: "premium-sayaç", description: "Sayaç'ı ayarlar.", usage: "(prefix)sayaç ayarla #kanal hedef"}