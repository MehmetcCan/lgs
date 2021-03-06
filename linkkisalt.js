const Codare = require("discord.js");
const Emirhan = require('snekfetch');
exports.run = async (message, args) => {
    const url = args.join("")
    try {
        const { body } = await Emirhan
            .post('https://www.googleapis.com/urlshortener/v1/url')//MHMTMehmetCan
            .query({
                longUrl: url,
                key: "AIzaSyBKleCLxk7omuX7oYnUWgxfX9czzpC-Yuk" 
            })
            .send({
                longUrl: url
            });
        message.channel.send(`Kısaltılan link: ${body.id}`);
    } catch (err) {
        message.channel.send(`Bir hata ile karşılaşıldı! \`${err.message}\``);
    }
}
//MHMT CODE SHARE & BOT LİST
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkkısalt'],
  permLevel: 0,

};

exports.help = {
  name: "link-kısalt",
  description: "Basit bir şekilde link kısaltırsınız",
  usage: "linkkısalt https://codare.fun"
};