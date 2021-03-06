const discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json");
exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
    if(!args[0]) return message.channel.send(`<:hayr:775299930952171540> | Küfür Engel Sistemini Öğrenmek İçin **/küfür-engel yardım** yazmanız Yeterli`)    
    if(args[0] == "log") {
let enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send('<:hayr:775299930952171540> | Lütfen Küfür Engel İçin Log Kanalını Etiketleyin.')
db.set(`küfürengellog_${message.guild.id}`, enginar.id)
const embed2 = new discord.MessageEmbed()
.setTitle('Küfür engel log')
.setDescription(`<:evet:775299903709511690> | Küfür Engel Log Kanalı <@${message.author.id}> Olarak Ayarlandı.`)
client.channels.cache.get(enginar.id).send(embed2)
const embed = new discord.MessageEmbed()
.setTitle('<:evet:775299903709511690> | Başarı ile Küfür Engel Log Kanalı Ayarlandı!')
.setDescription(`<:evet:775299903709511690> | Küfür engel log kanalını <#${enginar.id}> olarak ayarladım.`)
return message.channel.send(embed);
    };
    //mhm
   if(args[0] == "mesaj"){
        let enginar = args.slice(1).join(' ');
        if(!enginar) return message.channel.send('<:hayr:775299930952171540> | Lütfen bir mesaj yaz!')
db.set(`küfürengelmesaj_${message.guild.id}`, enginar)
const embed = new discord.MessageEmbed()
.setTitle('<:evet:775299903709511690>  | Küfür engel mesajı ayarlandı!')
.setDescription(`<:evet:775299903709511690> | Bundan sonra biri küfür eder ise <@${message.author.id}>, ${enginar} şeklinde cevap vereceğim!`)
.setColor('RANDOM')
return message.channel.send(embed)
    }
    //
    if(args[0] == "aç") {
        let kontrol = db.fetch(`küfürengellog_${message.guild.id}`)
        if(!kontrol) return message.channel.send('<:hayr:775299930952171540> | Küfür engel log kanalı ayarlanmamış!')
        let enginar = db.fetch(`küfürengelmesaj_${message.guild.id}`)
        if(!enginar) return message.channel.send('<:hayr:775299930952171540> | Küfür engel mesajı ayarlanmamış')
db.set(`küfürengel_${message.guild.id}`, 'aktif')
const embed = new discord.MessageEmbed()
.setTitle('<:evet:775299903709511690> | Küfür engel sistemi açıldı!')
.setDescription(`<:evet:775299903709511690> | <@${message.author.id}> bu sunucuda küfür engel sistemini aktifleştirdi!`)
.setColor('RANDOM')
client.channels.cache.get(kontrol).send(embed)
return message.channel.send('<:evet:775299903709511690> | Küfür engel sistemi aktifleştirildi!')
    }
//
if(args[0] == "sıfırla") {
    let engin = db.fetch(`küfürengellog_${message.guild.id}`)
    const embed = new discord.MessageEmbed()
    .setTitle('<:evet:775299903709511690> | Küfür engel sistemi kapatıldı!')
    .setDescription(`<:evet:775299903709511690> | <@${message.author.id}> küfür engel sistemini kapattı!`)
    client.channels.cache.get(engin).send(embed)
db.delete(`küfürengellog_${message.guild.id}`)
db.delete(`küfürengelmesaj_${message.guild.id}`)
db.delete(`küfürengel_${message.guild.id}`)
return message.channel.send('<:evet:775299903709511690> | Sistem başarı ile sıfırlandı!')
};
//
if(args[0] == "yardım") {
   const embed = new discord.MessageEmbed()
    .setTitle(`Küfür engel komutları`)
    .setDescription(`/küfür-engel yardım = Küfür engel komutlarını görürsünüz. \n /küfür-engel log = Küfür-engel log kanalını ayarlarsınız. \n /küfür-engel aç = Küfür engel sistemini açarsınız \n /küfür-engel sıfırla = Küfür engel sistemini sıfırlarsınız \n /küfür-engel mesaj = Küfür engel mesaj ayarlarsınız.`)
.setColor('RANDOM')
    message.channel.send(embed)



}
};
exports.conf = {
    enabled: true, 
    guildOnly: false,
    aliases: [],
    permLevel: 0
    };
    exports.help = {
        name : "küfür-engel"
        };