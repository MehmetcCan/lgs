const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  	let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
		if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
			const embed = new Discord.MessageEmbed()
				.setDescription(`Otorolü Ayarlamadığın İçin Kapatamazsın!`)
				.setColor("RED")
				.setTimestamp('Ayarlamak İçin /otorol @roladi')
			message.channel.send({embed})
			return
		}
  exports.run = async (client, message, args, member) => {
      	let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
		delete giriscikis[message.guild.id]
		fs.writeFile("./otorol.json", JSON.stringify(giriscikis), (err) => {

		})
		const embed = new Discord.MessageEmbed()
			.setDescription(`<a:onaylamak:762730901787508756> Otorol Mesajları Başarıyla Kapatıldı`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}}




exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kapatotoyazı', 
  description: 'Slots oyunu oynar',
  usage: 'otorolmesajkapat'
};