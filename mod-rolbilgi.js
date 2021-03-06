const Discord = require("discord.js")
exports.run = async (client, message, args) => {
    let role;
    if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first()
    if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){
        role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args[0].toLowerCase().trim())
        let bulunamadı = new Discord.MessageEmbed()
        .setDescription(`:no: Lütfen Bir Rol Etiketleyin Örnek: \`/rolbilgi @Üye\``)
        if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args[0].toLowerCase().trim())) return message.channel.send(bulunamadı)
    }
    if(args[0] && !isNaN(args[0]) && !message.mentions.roles.first()){
        role = message.guild.roles.cache.find(e => e.id == args[0])
        let bulunamadı2 = new Discord.MessageEmbed()
        .setDescription(`:no: Lütfen Bir Rol Etiketleyin Örnek: \`!rolbilgi @Üye\``)
        if(!message.guild.roles.cache.has(args[0])) return message.channel.send(bulunamadı2)
    }

    let hata1 = new Discord.MessageEmbed()
    .setDescription(`:no: Lütfen Bir Rol Etiketleyin Örnek: \`!rolbilgi @Üye\``)
    if(!args[0]) return message.channel.send(hata1)
let array = []

role.members.forEach(member => {
    if(role.members.size > 0){
        array.push(`<@${member.id}>`)
    }{

    }
})

let rolusers;
if(array.length > 20){
    rolusers = array.slice(0,20).join(", ") + `ve ${array.length - 20} fazla kullanıcı...`
}else {
    rolusers = array.join(", ")
}
    let rolembed = new Discord.MessageEmbed()
    .setColor(role.color)
    .setThumbnail(`http://colorhexa.com/${role.hexColor.toString().replace("#","")}.png`)
    .addField("Rol İsmi",role.name)
    .addField("Rol ID",role.id)
    .addField("Rol Tag","<@&" + role.id + ">")
    .addField("Etiketlenebilir mi?",role.mentionable.toString().replace("true","Evet").replace("false","Hayır"))
    .addField("Yer",`Toplam **${message.guild.roles.cache.size}** Rol arasında **${role.position}**. Sırada.`)
    .addField("Renk",role.hexColor)
    .addField("Kaç Kullanıcıda Bulunuyor",role.members.size)
    .addField("Hangi Kullanıcılarda Bu Rol Var?",rolusers)
    

    message.channel.send(rolembed)
};

  

  exports.help = {
    name:"rolbilgi",
    usage:"rolbilgi rol",
    description:"boş"
    }
    
    exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver'],
  permLevel: 0
};