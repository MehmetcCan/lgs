const Discord = require('discord.js');
exports.run = async (client, message) => {
  var karakterler = [
    "Colt",
    "Nita",
    "Bull",
    "Jessie",
    "Mortis",
    "Gale",
    "Leon",
     "Yıldız Gücü",
    "Aksesuar",
    "Spike",
    "Yıldız Gücü",
    "Aksesuar",
    "Sandy",
    "Crow",
     "Yıldız Gücü",
    "Aksesuar",
    "MR.P",
    "Max",
    "Sprout",
    "Tara",
     "Yıldız Gücü",
    "Aksesuar",
    "Gene",
    "Surge",
    "Yıldız Gücü",
    "Aksesuar",
    "Brock",
    "Dynamike",
     "Yıldız Gücü",
    "Aksesuar",
    "Frank",
    "Piper",
    "Carl",
    "Penny",
     "Yıldız Gücü",
    "Aksesuar",
    "Darrly",
    "Rico",
    "Rosa",
     "Yıldız Gücü",
    "Aksesuar",
    "Poco",
    "Yıldız Gücü",
    "Aksesuar",
    "Barley",
     "Yıldız Gücü",
    "Aksesuar",
    "El Primo",
    "8-Bit",
    "Tick",
     "Yıldız Gücü",
    "Aksesuar",
    "Bibi",
    "Bo",
    "Shelly",
    "Pam",
     "Yıldız Gücü",
    "Aksesuar",
    "Bea",
    "Emz",
    "Jacky",
    "Nani",
    "Shelly",
     "Yıldız Gücü",
    "Aksesuar",
    "Amber",
    "Leon",
    "Crow",
    "Spike",
    "Collete",
     "Yıldız Gücü",
    "Aksesuar",
    "Edgar",
    "MHMTMİKE :D",
    "Yıldız Gücü",
    "Aksesuar",
     "Yıldız Gücü",
    "Aksesuar",
   
    ]  
  var karakterler = karakterler[Math.floor(Math.random(1) * karakterler.length)]
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.username} ın Kutusu;`, message.author.avatarURL())
    .setImage('https://media0.giphy.com/media/JOdQKwcV985Ip2ezWh/giphy.gif')
    .setDescription(`
\`\`\`
Kutudan Çıkan  = ${karakterler}
\`\`\`
`)
  .setFooter(`Kutuyu açan (${message.author.username}) Unutma Bunlar Sadece Bir Simülatör Gerçek hesabına Gelmez`)
    message.channel.send(embed);
  }
 
 
exports.conf = {
  aliases: ['jsal']
}
exports.help = {
  name: "kutuaç"
}