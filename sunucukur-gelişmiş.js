const Discord = require('discord.js');
const data = require('narcos-db');


exports.run = async (client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`).addField('Sunucu Sahibi', message.guild.owner.user.tag).setImage('https://cdn.glitch.com/6f5bb25b-c11b-4003-8a39-69490341df18%2FScreenshot_1.png'));

message.channel.send(new Discord.MessageEmbed()
.setTitle('Oyun & Sohbet Tema')
.setThumbnail('https://cdn.discordapp.com/avatars/797873310000087050/ab81f5738afb582ab7328ec0b14a1890.webp?size=1024')
.setImage("https://media.discordapp.net/attachments/791733768611823672/798589974852272128/standard_2.gif")
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

message.guild.roles.create({ data: { name: '👑 | MHMTMehmetCan | 👑' }, reason: 'ayn' }).then(s => s.setColor('#050000'))
 
message.guild.roles.create({ data: { name: '⚜ | Yönetici | ⚜' }, reason: 'ayn' }).then(s => s.setColor('#135403'))
message.guild.roles.create({ data: { name: '💫 | Moderatörs' }, reason: 'ayn' }).then(s => s.setColor('#03185b'))
message.guild.roles.create({ data: { name: '💭 | Chat Sorumlusu ' }, reason: 'ayn' }).then(s => s.setColor('#bdd108'))
message.guild.roles.create({ data: { name: '💦 | Rehber ' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))
message.guild.roles.create({ data: { name: '💗 | Youtuber' }, reason: 'ayn' }).then(s => s.setColor('#8c0578'))
message.guild.roles.create({ data: { name: '💥 | Vip' }, reason: 'ayn' }).then(s => s.setColor('#ff0a0a'))
message.guild.roles.create({ data: { name: '💖 | Destekçi' }, reason: 'ayn' }).then(s => s.setColor('#ff0aff'))
message.guild.roles.create({ data: { name: '🌸 | Özel Üye' }, reason: 'ayn' }).then(s => s.setColor('#2e9afe'))
message.guild.roles.create({ data: { name: '💛 | Üye' }, reason: 'ayn' }).then(s => s.setColor('#00ff40'))
message.guild.roles.create({ data: { name: '🤖・Botlar' }, reason: 'ayn' }).then(s => s.setColor('#e77e2e'))

message.guild.channels.create('【BILGILENDIRME】', {type: 'category'}).then(parent => {
message.guild.channels.create('📢・duyurular', {type: 'text'}).then(a => a.setParent(parent.id));
message.guild.channels.create('🎁・boost-bilgi', {type: 'text'}).then(a => a.setParent(parent.id));
message.guild.channels.create('🎉・çekiliş', {type: 'text'}).then(a => a.setParent(parent.id));
message.guild.channels.create('📕・bilgilendirme', {type: 'text'}).then(a => a.setParent(parent.id));
message.guild.channels.create('📝・yetkili-basvuru', {type: 'text'}).then(a => a.setParent(parent.id));
});

message.guild.channels.create('【SOSYAL MEDYA】', {type: 'category'}).then(parent => {
    message.guild.channels.create('💙・youtube', {type: 'text'}).then(c => c.setParent(parent.id));
    message.guild.channels.create('🧡・instagram', {type: 'text'}).then(a => a.setParent(parent.id));
    message.guild.channels.create('💛・tiktok', {type: 'text'}).then(a => a.setParent(parent.id));
    message.guild.channels.create('💚・twitch', {type: 'text'}).then(a => a.setParent(parent.id));
    });

message.guild.channels.create('【GENEL】', {type: 'category'}).then(parent => {
message.guild.channels.create('💬・sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖・bot-komut', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📷・foto-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎲・gune-soz-birak', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📚・oneri-istek-sikayet', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('【🖨 Gelen Giden】', {type: 'category'}).then(parent => {
message.guild.channels.create('📥・sayaç', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚪・giriş-çıkış', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎓・otorol', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('【YÖNETİM】', {type: 'category'}).then(parent => {
message.guild.channels.create('📌・şikayet-öneri', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🏆・Yönetici Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🏆・Kurucu Odası', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});


message.guild.channels.create('【Eğlence Alanı】', {type: 'category'}).then(parent => {
message.guild.channels.create('💼・kutu-aç', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚫・düello', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔎・havalıdurum', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎆・sayı-sayma', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📘・lafsok', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('「💬 Sesli Sohbet」', {type: 'category'}).then(parent => {
    message.guild.channels.create('💬 ・ Sohbet Odası 1', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
    message.guild.channels.create('💬 ・ Sohbet Odası 2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
    message.guild.channels.create('💬 ・ Sohbet Odası 3', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
    message.guild.channels.create('💬 ・ Sohbet Odası 4', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
    });

message.guild.channels.create('「🎵 Müzik Alanı」', {type: 'category'}).then(parent => {
message.guild.channels.create('🎵 ・ Music Room 1', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎵 ・ Music Room 2', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎵 ・ Music Room 3', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎵 ・ Music Room 4', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});

message.guild.channels.create('「🎰 Oyun Alanı」', {type: 'category'}).then(parent => {
message.guild.channels.create('👥・oyun-chat', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎮・League Of Legends', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・ZULA', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・CSGO', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・PUBG', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・FORTNİTE', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・MİNECRAFT', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(15));
message.guild.channels.create('🎮・ROBLOX', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
message.guild.channels.create('🎮・AMONG US', {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(10));
});
});

no.on('collect', async reaction => {
resulter.delete();
});

})


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucukur-gelişmiş'],
  permLevel: 0
}

exports.help = {
  name: 'sunucukur-gelişmiş'
};