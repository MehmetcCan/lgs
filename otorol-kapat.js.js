const Discord = require('discord.js')
const fs = require('fs')

exports.run = async (client, message, args) => {
  	let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
    	let otorolkapat = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
		if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
			const embed = new Discord.MessageEmbed()
				.setDescription(`Otorolü Ayarlamadığın İçin Sıfırlayamazsın!`)
				.setColor("RED")
				.setTimestamp('Ayarlamak İçin /otorol @roladi')
			message.channel.send({embed})
			return
		}
		delete sunucuyaözelayarlarOtorol[message.guild.id]
		fs.writeFile("./otorol.json", JSON.stringify(sunucuyaözelayarlarOtorol), (err) => {
			console.log(err)
		})
		const embed = new Discord.MessageEmbed()
			.setDescription(`<a:onaylamak:762730901787508756> Otorol Başarıyla Sıfırlandı`)
			.setColor("RANDOM")
			.setTimestamp()
		message.channel.send({embed})
		return
	}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['otorol-sıfırla','otorol-kapat'],
  permLevel: 0
};

exports.help = {
  name: 'otorolsıfırla', 
  description: 'Slots oyunu oynar',
  usage: 'otorolkapat'
};