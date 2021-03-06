const Discord = require('discord.js');
const qdb = require('narcos-db');


exports.run = async (client, message, args) => {// chimp 💕'b#0308
if(!message.member.hasPermission('MANAGE_ROLES')) return;
if(!args[0]) return message.channel.send(`/kayıt-gelengiden yardım yazarak komuta ulaşabilirsiniz.`)

  
  let açıkmı = await qdb.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

// buranın altına komutları yazın  
let prefix = "/"
exports.run = async(client, message, args) => {
if(!args[0]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **/kayıt-gelengiden yardım**')
if(args[0] === "ayarla" || args[0] === "aç") {
if(!args[1]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **/kayıt-gelengiden yardım**')
if(args[1] === "kanal") {
var kanal = message.mentions.channels.first();
if(!kanal) return message.reply('Bir kanal belirtiniz!')
qdb.set(`hgbbkanali_${message.guild.id}`, kanal.id)
return message.reply('Giriş kanalı başarıyla ayarlandı!')}
if(args[1] === "rol") {
var teyitci = message.mentions.roles.first();
if(!teyitci) return message.reply('Bir rol belirtiniz!')
qdb.set(`teyitci_${message.guild.id}`, teyitci.id)
return message.reply('Kayıt Görevlisi rolü başarıyla ayarlandı!')}
if(args[1] === "tag"){
var tag = args.slice(2).join(' ')
if(!tag) return message.reply("Tag'ınızı belirtin")
qdb.set(`tag_${message.guild.id}`, tag)
return message.reply('Tag başarıyla ayarlandı!')}}
if(args[0] === "kapat" || args[0] === "sıfırla"){
if(!args[1]) return message.reply('Bir komut belirtiniz eğer nasıl kullanılır bilmiyorsanız **/kayıt-gelengiden yardım**')
if(args[1] === "kanal") {
qdb.delete(`hgbbkanali_${message.guild.id}`)
return message.reply('Giriş kanalı veritabanı sıfırlandı!')}
if(args[1] === "rol"){
qdb.delete(`teyitci_${message.guild.id}`)
return message.reply('Kayıt Görevlisi rolü başarıyla sıfırlandı!')}
if(args[1] === "tag"){
qdb.delete(`tag_${message.guild.id}`)
return message.reply('Tag veritabanı başarıyla sıfırlandı')}} 
if(args[0] === "yardım" || args[0] === "help"){
const embedimsi = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle(`${client.user.username} Public Giriş-Çıkış Komutları`)
.addField(`${prefix}kayıt-gelengiden yardım`,'Yardım Menüsü')
.addField(`${prefix}kayıt-gelengiden ayarla kanal #kanal`,'Giriş çıkış kanalını ayarlar.')
.addField(`${prefix}kayıt-gelengiden ayarla rol @rol`,'Kayıt sorumlusu rolünü ayarlar.')
.addField(`${prefix}kayıt-gelengiden ayarla tag <tagınız>`,"Tag'ı ayarlar.")
.addField(`${prefix}kayıt-gelengiden sıfırla kanal`,'Giriş çıkış kanalını sıfırlar.')
.addField(`${prefix}kayıt-gelengiden sıfırla rol`,'Kayıt sorumlusu rolünü sıfırlar.')
.addField(`${prefix}kayıt-gelengiden sıfırla tag`,"Tag'ı sıfırlar")
.setFooter(message.author.username + ' kullandı!')
message.channel.send(embedimsi)}}
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
   exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["kayıt-gelengiden","gelengiden-kayıt","kayıtgelengiden"],
     permLevel: 0
   }
   
   exports.help = {
     name: 'kayıtgelengiden'
    };