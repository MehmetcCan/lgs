const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const ffmpeg = require('ffmpeg');
const ytdl = require('ytdl-core');
const moment = require('moment');
const Jimp = require('jimp');
const chalk = require('chalk');
const db  = require('narcos-db');




const log = message => {
    console.log(`${message}`);
};

///Prefix
client.on("message", msg => {
  //let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "/";
  const westrabumbe = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Prefixim: ${ayarlar.prefix}\n Yardım için: ${ayarlar.prefix}yardım`);
  if (
    msg.content.includes(`<@${client.user.id}>`) ||
    msg.content.includes(`<@!${client.user.id}>`)
  ) {
    msg.channel.send(westrabumbe);
  }
});
  ///prefix son

//Beni Eklediğin İçin Teşekkür
client.on("guildCreate", async guild => {
  guild.owner.send("Beni Sunucuna Eklediğin İçin Sana Teşekkür Ederim Elimden Gelen Herşeyi Yapıcağım. <a:mhmtkalp:757535114203889705> ");
});
//-------------------------------
client.on("guildDelete", async guild => {
  guild.owner.send("Beni Sunucundan Attın Kalbim Kırıldı 💔💔");
});
//Beni Attın Kalbim  Kırıldı

//////eklendim atıldım
client.on('guildDelete', guild => {

  let avex = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setTitle(" Bot Atıldı ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('813463402604134471').send(avex);
  
  });
  
  
  client.on('guildCreate', guild => {
  
  let avex = new Discord.MessageEmbed()
  
  .setColor("GREEN")
  .setTitle(" Bot Eklendi ")
  .addField("Sunucu Adı:", guild.name)
  .addField("Sunucu sahibi", guild.owner)
  .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
  .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
  .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
  
     client.channels.cache.get('813463402604134471').send(avex);
  
  });
  // EKLENDİM ATILDIM

  //////////////// ANTİ RAİD /////////////////////
  client.on('message', async message => {
    if (message.content === 'fakekatıl') { // Buraya ne yazarsanız yazdığınız şeye göre çalışır
      client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
        }
    });
    client.on('message', async message => {
      if (message.content === 'fakeayrıl') { // Buraya ne yazarsanız yazdığınız şeye göre çalışır
        client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
          }
      });
  
  //////////////// ANTİ RAİD /////////////////////

  client.on('guildCreate', guild => {
    let virus = guild.channels.filter(c => c.type === "text").random()
    virus.send("Hey Ben Sunucuya Katıldım Hoşgeldin Yokmu Yardım Komutumu Görmek için /yardım yazın Prefixim /");
});

client.on('message', async msg => {
  let prefix = ayarlar.prefix 
const embed = new discord.messageEmbed()
.setTitle('Başlık')
.setDescription('ne yazmasını istiyosanız')
.setColor('RANDOM')
  if(msg.content == `<@!797873310000087050>`) return msg.channel.send(embed);
});
//---------------------------------------SA-AS-------------------------------------------\\
client.on("message", async msg => {
 
 
    const i = await db.fetch(`ssaass_${msg.guild.id}`);
      if (i == 'acik') {
        if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
            try {
   
                    return msg.reply(
                      '**Aleyküm Selam, Hoşgeldin Dostum Umarım İyisindir. <a:or_kalp2:800348891068628992>**')
            } catch(err) {
              console.log(err);
            }
        }
      }
      else if (i == 'kapali') {
     
      }
      if (!i) return;
   
      });

//---------------------------------------SA-AS BİTİŞ-------------------------------------------\\

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Electro Bots: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
  //-------------------------------------Küfür Engel Bitiş-------------------------------------------------------\\
  client.on('message', async msg => {
    const Database = require("plasma-db");
    const db = new Database("./database.json");
    let engin = db.fetch(`küfürengellog_${msg.guild.id}`)
    let enginn = db.fetch(`küfürengelmesaj_${msg.guild.id}`)
    let enginar = db.fetch(`küfürengel_${msg.guild.id}`)
    if(enginar === "aktif") {
    const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm","sg","ananın amına anten sokim","ananın","amına","anten sokim", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq","göt","amk","piç","peç","yawşak","yavşak","ibne","orusbu çoçuğu","amk piçi"];
    if (kufurler.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
              msg.delete();
              const embed = new Discord.MessageEmbed()
              .setTitle('<:evet:775299903709511690> | Sunucuda Birisi Küfür Etti')
              .setDescription(`<@${msg.author.id}> adlı kullanıcı küfür ETTİ \n Ancak Electro Bota Yakalanarak Küfürünü Sildim`)
              client.channels.cache.get(engin).send(embed)
              return msg.channel.send(`<@${msg.author.id}>, ${enginn}`)
     
            }              
          } 
          catch(err) {
            console.log(err);
          }
    }
    }
    else return;
    });
 //-------------------------------------Küfür Engel Bitiş-------------------------------------------------------\\
 //-------------------------------------Reklam Engel -------------------------------------------------------\\

       //-------------------------------------Reklam Engel Bitiş-------------------------------------------------------\\
 //-------------------------------------Hoşgeldin BB-------------------------------------------------------\\

      client.on('guildMemberAdd', async (member) => {
        var teyitci = db.fetch(`teyitci_${member.guild.id}`)
        var rol = `<@&${teyitci}>`
        var gelen = `<@${member.id}>`
        var rolMesaj = `<a:saaok:767016334830731314> ${rol} Rolundekiler Senle En Kısa Zamanda İlgilenicek`
        if(!teyitci) {
        var rol = ""
        var gelen = ""
        var rolMesaj = "<a:saaok:767016334830731314> Sunucumuza Boost basarak özel avantajların sahibi olabilirsin!"
        }
        var kanal = db.fetch(`hgbbkanali_${member.guild.id}`)
        if(!kanal) return;
        var tag = db.fetch(`tag_${member.guild.id}`)
        var tagMesaj = `<a:saaok:767016334830731314> Ayrıca Tagımızı Alarak Bize Destek Olabilirsin "${tag}"`
        if(!tag){
          var tag = ""
          var tagMesaj = ""
        }
          let viruskanal = member.guild.channels.cache.get(kanal)
        let virususer = client.users.cache.get(member.id);
        let viruskullanıcı = client.users.cache.get(member.id)
        const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
        let viruj;
        if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değil!'
        if (virushesapkurulus > 1296000000) viruj = ' Güvenilir!'
          const hgembed = new Discord.MessageEmbed()
          .setDescription(`
          
           <a:saaok:767016334830731314> Aramıza Hoşgeldin **${virususer.username}** !
        
           <a:saaok:767016334830731314> Seninle Birlikte **${member.guild.memberCount}** Kişiyiz
        
           ${rolMesaj}
           
           <a:saaok:767016334830731314> İsmini Ve Yaşını Yazıp Kayıt Olabilirsin.
      
           <a:saaok:767016334830731314> Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
        
           <a:saaok:767016334830731314> Hesabın Güvenlik Durumu: **${viruj}**
          
           ${tagMesaj}
          
          `)
          .setColor("#2f3136")
          .setTitle("Sunucumuza Yeni Birisi Katıldı !")
          .setTimestamp()
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
          .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
          .setFooter(`${member.guild.name} Kayıt Sistemi`)
          viruskanal.send(`${rol} ${gelen}`, hgembed) ;
        })
      client.on('guildMemberRemove', async (member) => {
        var gelen = `<@${member.id}>`
        var kanal = db.fetch(`hgbbkanali_${member.guild.id}`)
        if(!kanal) return;
          var viruskanal = member.guild.channels.cache.get(kanal)
        let virususer = client.users.cache.get(member.id);
        let viruskullanıcı = client.users.cache.get(member.id)
        const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
        let viruj;
        if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değildi...'
        if (virushesapkurulus > 1296000000) viruj = ' Güvenilirdi...'
          const hgembed = new Discord.MessageEmbed()
          .setDescription(`
          
           <a:saaok:767016334830731314> **${virususer.username}** Aramızdan Ayrıldı :(
        
           <a:saaok:767016334830731314> Sensiz **${member.guild.memberCount}** Kişiyiz
      
           <a:saaok:767016334830731314> Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
        
           <a:saaok:767016334830731314> Hesabın Güvenlik Durumu: **${viruj}**
          
          `)
          .setColor("#2f3136")
          .setTitle("Sunucumuzdan aramızdan ayrıldı :(")
          .setTimestamp()
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
          .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
          .setFooter(`${member.guild.name} Kayıt Sistemi`)
          viruskanal.send(hgembed) ;
        })
         //-------------------------------------Hoşgeldin BB Bitiş-------------------------------------------------------\\

      /////////////////çekiliş
client.elevation = message => {
  if (!message.guild) {
      return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
      botsCanWin: false,
      embedColor: "#FF0000",
      reaction: "<a:mhmtparty:757535274216587345>"
  }
});


//--------------------------------------------------AFK----------------------------------------------------------\\


client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('#e6ff0a').setDescription(` <@` + msg.author.id + `> Etiketlediğiniz Kişi Şuanda Cevap Veremez <a:mhmtkedicik:757535191731404872> \n\n  **Sebep :** ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('#e6ff0a').setDescription(` <@${kisi}> Artık AFK Değilsin <a:mhmtonaylad:758593732534075402>`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});


//--------------------------------------AFK BİTİŞ------------------------------------------------\\
//---------------------Otorol---------------------------------\\
client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
let arole = otorole[member.guild.id].sayi
let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
let embed = new Discord.MessageEmbed()
.setTitle('Otorol Sistemi')
.setDescription(`<a:slm:793545352770879488> <a:onaylamak:762730901787508756>  @${member.user.tag}'a Otorol Verildi `)
.setColor("GREEN")
.setFooter("Electro | Otorol", client.user.avatarURL());

if (!giriscikis[member.guild.id].kanal) {
return;
}

try {
let giriscikiskanalID = giriscikis[member.guild.id].kanal;
let giriscikiskanali = client.guilds.cache.get(member.guild.id).channels.cache.get(giriscikiskanalID);
giriscikiskanali.send(`<a:slm:793545352770879488> <a:onaylamak:762730901787508756> Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`);
} catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
return console.log(e)
}

});

client.on("guildMemberAdd", async (member) => {
let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
let role = autorole[member.guild.id].sayi

member.roles.add(role)

});

//---------------------Otorol-Bitiş--------------------------------\\
//-------------------------Mute--------------------------------------\\
client.on('guildMemberAdd', async(member) => {
  let mute = db.fetch(`muterol_${member.guild.id}`);
  let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
  if (!mutelimi) return;
  if (mutelimi == "muteli") {
  member.roles.add(mute)
   member.send("Kendini Çok Zeki Sanıyorsun Sanırım Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!")
       const modlog = db.fetch(`modlogKK_${member.guild.id}`)
    if (!modlog) return;
     db.delete(`muteli_${member.guild.id + member.id}`)
        const embed = new Discord.MessageEmbed()
      .setThumbnail(member.avatarURL())
      .setColor('b20707')
      .setTimestamp()
      .addField('Eylem:', '**Mute**')
      .addField('Kullanıcı:', `${member} (${member.id})`)
      .addField('Yetkili:', `${client.user} (${client.user.id})`)
      .addField('Süre', "Yetkililer Açana Kadar")
      .addField('Sebep', "Muteliyken Sunucudan Çıkmak.")
     member.guild.channels.cache.get(modlog).send(embed);
  }
  })
  //-------------------------Mute Bitiş--------------------------------------\\
  client.on("ready", async () => {
    console.log("Bot Başarıyla Ses Kanalına Bağlandı")
    let botVoiceChannel = client.channels.cache.get("815528912280879124");
    if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanırken bir hata oluştu!"));
  });
  //-------------------------Premium Sa-as------------------------------------\\

//----------------------------Premium SA-as----------------------------------\\
//---------------------------HG-BB-------------------------------------------\\
client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e); 
        }
    });
};
client.on("guildMemberRemove", async member => {
    //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
    //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
    
    if (db.has(`gçkanal_${member.guild.id}`) === false) return;
    var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
    if (!canvaskanal) return;
  
    const request = require("node-superfetch");
    const Canvas = require("canvas"),
      Image = Canvas.Image,
      Font = Canvas.Font,
      path = require("path");
  
    var randomMsg = ["**Sunucudan Ayrıldı.**"];
    var randomMsg_integer =
      randomMsg[Math.floor(Math.random() * randomMsg.length)];
  
    let msj = await db.fetch(`cikisM_${member.guild.id}`);
    if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  
    const canvas = Canvas.createCanvas(664, 292);
    const ctx = canvas.getContext("2d");
  
    const background = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/813463390169071643/813874223353298945/unknown.png"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(1, 1, canvas.width, canvas.height);
  
    ctx.fillStyle = `#D3D3D3`;
    ctx.font = `37px "Warsaw"`;
    ctx.textAlign = "center";
    ctx.fillText(`${member.user.username}`, 310, 280);
  
    let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    const { body } = await request.get(avatarURL);
    const avatar = await Canvas.loadImage(body);
  
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 250, 55, 110, 110);
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "Robot-Gülegüle-Electro.png"
    );
  
      canvaskanal.send(attachment);
      canvaskanal.send(
        msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
      );
      if (member.user.bot)
        return canvaskanal.send(`**🤖 Bu bir Robot,** ${member.user.tag}`);
    
  });
  
  client.on("guildMemberAdd", async member => {
    if (db.has(`gçkanal_${member.guild.id}`) === false) return;
    var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
  
    if (!canvaskanal || canvaskanal ===  undefined) return;
    const request = require("node-superfetch");
    const Canvas = require("canvas"),
      Image = Canvas.Image,
      Font = Canvas.Font,
      path = require("path");
  
    var randomMsg = ["**Sunucuya Katıldı.**"];
    var randomMsg_integer =
      randomMsg[Math.floor(Math.random() * randomMsg.length)];
  
    let paket = await db.fetch(`pakets_${member.id}`);
    let msj = await db.fetch(`cikisM_${member.guild.id}`);
    if (!msj) msj = `{uye}, ${randomMsg_integer}`;
  
    const canvas = Canvas.createCanvas(664, 292);
    const ctx = canvas.getContext("2d");
  
    const background = await Canvas.loadImage(
      "https://cdn.discordapp.com/attachments/813463390169071643/813867677202382848/unknown.png"
    );
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    ctx.strokeStyle = "#74037b";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
    ctx.fillStyle = `#D3D3D3`;
    ctx.font = `37px "Warsaw"`;
    ctx.textAlign = "center";
    ctx.fillText(`${member.user.username}`, 310, 280);
  
    let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;
    const { body } = await request.get(avatarURL);
    const avatar = await Canvas.loadImage(body);
  
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
    ctx.clip();
    ctx.drawImage(avatar, 250, 55, 110, 110);
  
    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "Robot-Hoşgeldin-Electro.png"
    );
  
    canvaskanal.send(attachment);
    canvaskanal.send(
      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
    );
    if (member.user.bot)
      return canvaskanal.send(`**🤖 Bu bir Robot, ${member.user.tag}**`);
  });
  //----------------------------------HG-BB Bitiş-------------------------------------\\

  client.on('guildCreate', guild => {

    let bigz = guild.channels.filter(c => c.type === "text").random()
    bigz.send("Ben Gellldim /yardım Yazarak Komutlarıma Erişebilirsin");
});
//----------------------------------Sayaç--------------------------------------\\
client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`**<a:mhmtmaviyldz:769144174531837964> | Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!**`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**<a:mhmtuyar:757535140866949120> Malesef ${member.user.tag}** Sunucudan ayrıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`**<a:slm:793545352770879488> ${member.user.tag}** Sunucuya Katıldı <a:mhmtmaviyldz:769144174531837964> \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` üye kaldı!`);
});
//----------------------------------Sayaç Bitiş--------------------------------------\\
//---------------------------------Permium Sayaç--------------------------------------\\
client.on("guildMemberAdd", member => {
  var kanal = db.fetch(`sayackanali_${member.guild.id}`)
  if(!kanal) return;
  var hedef = db.fetch(`sayachedefi_${member.guild.id}`)
  if(!hedef) return;
  var embed = db.fetch(`sayacturu_${member.guild.id}`)
  var mesaj = db.fetch(`sayacmesaji_${member.guild.id}`)
  var p = "/"
  if(!mesaj){
  var ovnırbey = member.guild.owner.id 
  client.users.cache.get(ovnırbey).send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum ${member.guild.name} isimli sunucunda sayaç kanalı <#${kanal}> olarak, sayaç hedefi ${hedef} olarak ayarlanmış. Fakat sayaç mesajı ayarlanmadığı için sayacı çalıştıramıyorum :( Ayarlamak için: \`${p}sayaç yardım mesaj\` komutunu kullanabilirsin!`))
  }
  if(mesaj) {
  if(embed === "embed"){
  var mesajcık = mesaj.replace("{sunucu}", `**${member.guild}**`).replace("{sunucu}", `**${member.guild}**`).replace("{üye}", `**${member}**`).replace("{üye}", `**${member}**`).replace("{hedef}", `\`${hedef}\``).replace("{hedef}", `\`${hedef}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``)
  const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${member.guild.name}`)
  .setDescription(mesajcık)
  .setFooter("Electro Bot | Premium Sistemi")
  return client.channels.cache.get(kanal).send(embed)
  };
  if(embed !== "embed") {
  var mesajcık = mesaj.replace("{sunucu}", `**${member.guild}**`).replace("{sunucu}", `**${member.guild}**`).replace("{üye}", `**${member}**`).replace("{üye}", `**${member}**`).replace("{hedef}", `\`${hedef}\``).replace("{hedef}", `\`${hedef}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``)
  client.channels.cache.get(kanal).send(mesajcık)
  };
  }
  })
  client.on("guildMemberAdd", member => {
  var p = "/"
  var hedef = db.fetch(`sayachedefi_${member.guild.id}`)
  if(!hedef) return;
  var kanal = db.fetch(`sayackanali_${member.guild.id}`)
  if(!kanal) return;
  if(hedef <= member.guild.memberCount){
      db.delete(`sayachedefi_${member.guild.id}`)
      db.delete(`sayackanali_${member.guild.id}`)
      db.delete(`sayacmesaji_${member.guild.id}`)
      db.delete(`sayacturu_${member.guild.id}`)
      db.delete(`sayaccikis_${member.guild.id}`)
      db.delete(`sayaccikistur_${member.guild.id}`)
      client.users.cache.get(member.guild.owner.id).send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Dostum, görünüşe bakılırsa sunucun ${hedef} sayısına ulaşmış. Bu sebeple sayaç'ını sıfırladım. Yeniden açmak için \`${p}sayaç yardım\` komutunu kullanabilirsin.`))
      client.channels.cache.get(kanal).send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Sunucu hedefimiz olan \`${hedef}\` kişiye ulaştı, sayaç sıfırlandı.`))
  }
  })
  client.on("guildMemberRemove", member => {
  var kanal = db.fetch(`sayackanali_${member.guild.id}`)
  if(!kanal) return;
  var hedef = db.fetch(`sayachedefi_${member.guild.id}`)
  if(!hedef) return;
  var mesaj = db.fetch(`sayaccikis_${member.guild.id}`)
  var embed = db.fetch(`sayaccikistur_${member.guild.id}`)
  if(!mesaj) return;
  else {
  if(mesaj) {
  if(embed === "embed"){
  var mesajcık = mesaj.replace("{sunucu}", `**${member.guild}**`).replace("{sunucu}", `**${member.guild}**`).replace("{üye}", `**${member.user.username}**`).replace("{üye}", `**${member.user.username}**`).replace("{hedef}", `\`${hedef}\``).replace("{hedef}", `\`${hedef}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``)
  const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${member.guild.name}`)
  .setDescription(mesajcık)
  .setFooter("Electro Bot | Premium Sistemi")
  return client.channels.cache.get(kanal).send(embed)
  };
  if(embed !== "embed") {
  var mesajcık = mesaj.replace("{sunucu}", `**${member.guild}**`).replace("{sunucu}", `**${member.guild}**`).replace("{üye}", `**${member.user.username}**`).replace("{üye}", `**${member.user.username}**`).replace("{hedef}", `\`${hedef}\``).replace("{hedef}", `\`${hedef}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{fark}", `\`${ hedef - member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``).replace("{toplam}", `\`${member.guild.memberCount}\``)
  client.channels.cache.get(kanal).send(mesajcık)
  };
  };
  };
  })
  //---------------------------------Premium Sayaç Bitiş-----------------------------\\
//----------------------------------Perm Level---------------------------------------//
client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

//-----------------------------Perm Level Bitiş--------------------------------------//

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

//----------------------------Tüm Komutlar------------------------------------//

//Random PP Gif
client.on('userUpdate', (oldUser, newUser) => {//chimp 💕'b#0308
if(oldUser.avatarURL() !== newUser.avatarURL()) {

  client.guilds.cache.forEach(async guild => {
  if(guild.members.cache.get(newUser.id)) {
  
  const channeldata = await require('narcos-db').fetch(`ppgif.${guild.id}`)
  if(!channeldata) return;
  let channel = await guild.channels.cache.get(channeldata)
  
  let avatar = new Discord.MessageAttachment(newUser.avatarURL())
  let gifkontrol;
  if(newUser.avatarURL().includes('.gif')) { gifkontrol = `**[GİF](${newUser.displayAvatarURL()})**` }
  if(!newUser.avatarURL().includes('.gif')) { gifkontrol = `~~**[GİF](${newUser.displayAvatarURL()})**~~` }
    
    
  const chimp2 = new Discord.MessageEmbed().setColor('GOLD').setImage(newUser.avatarURL()).setDescription(`${gifkontrol} **[PNG](${newUser.avatarURL().replace('.gif', '.png').replace('.jpg', '.png').replace('.webp', '.png')})** **[JPG](${newUser.avatarURL().replace('.png', '.jpg').replace('.gif', '.jpg').replace('.webp', '.jpg')})** **[WEBP](${newUser.avatarURL().replace('.gif', '.webp').replace('.png', '.webp').replace('.jpg', '.webp')})**`)
  if(!newUser.avatarURL().includes('.gif')) return channel.send(chimp2)

  }
  })
}
})// codare ♥
//RAndom Pp Gif

//SNİPE
client.on('messageDelete', message => {
  const anan = require("narcos-db")
  anan.set(`snipe.mesaj.${message.guild.id}`, message.content)
  anan.set(`snipe.id.${message.guild.id}`, message.author.id)
})
 
//SNİPE BİTŞ




  //----------------------Sahibim-------------------------------------------------//
//MHMTMehmetCan Tarafından Yapılmıştır.
client.on("message", async message => {
    const ms = require('parse-ms')
     let dogrulama = await db.fetch(`sahiponay_${message.author.id}_${message.guild.id}`);
      let gun = 1800000; 
      if (dogrulama !== null && gun - (Date.now() - dogrulama) > 0) {
         
      } else {
            if(message.author.id === ayarlar.sahip){
             db.set(`sahiponay_${message.author.id}_${message.guild.id}`, Date.now())
              message.channel.send("Ooo Sahibimde Burdaymış <@730096504647188531> Hoşgeldin Usta <a:mhmtkral:770706791184334898>").then(msg => msg.delete (15000))
              }
          }
         
  }); 
  //--------------------------Sahibim Bitiş----------------------------------------//
  
  //--------------------------------Sayaç--------------------------------//

  //---------------------------------Sayaç Bitiş--------------------------//
 
  ////////////////modlogbaşlangıç///////////////////////////
client.on('channelCreate', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`modlog_${channel.guild.id}`));
  if (!c) return;
    var embed = new Discord.MessageEmbed()
                    .addField(`<a:ayarlar:815620596669874176> | Bir Kanal Oluşturuldu`, ` **Kanal ismi** = ${channel.name} \n **Kanal türü** = ${channel.type} \n **Kanal İd**: ${channel.id}`)
                    .setTimestamp()
                    .setColor("067a04")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL())
    c.send(embed)
});

client.on('channelDelete', async channel => {
  const c = channel.guild.channels.cache.get(db.fetch(`modlog_${channel.guild.id}`));
  if (!c) return;
    let embed = new Discord.MessageEmbed()
                    .addField(`<a:duyuru:815620567893016616> | Bir Kanal Silindi`, ` **Kanal İsmi** = ${channel.name} \n **Kanal Türü** = ${channel.type} \n **Kanal İd** = ${channel.id}`)
                    .setTimestamp()
                    .setColor("7f0505")
                    .setFooter(`${channel.client.user.username}#${channel.client.user.discriminator}`, channel.client.user.avatarURL())

    c.send(embed)
});



client.on('emojiCreate', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`modlog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`<a:ayarlar:815620596669874176> | Emoji oluşturuldu`, ` **Emoji İsmi** = ${emoji.name} \n **Gifmi?** = ${emoji.animated} \n **Emoji İd** = ${emoji.id}`)
                    .setTimestamp()
                    .setColor("067a04")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL())

    c.send(embed)
    });
client.on('emojiDelete', emoji => {
  const c = emoji.guild.channels.cache.get(db.fetch(`modlog_${emoji.guild.id}`));
  if (!c) return;

    let embed = new Discord.MessageEmbed()
                    .addField(`<a:duyuru:815620567893016616> | Emoji silindi`, ` **Emoji İsmi** = ${emoji.name} \n **Gifmi?** = ${emoji.animated} \n **Emoji İd** = ${emoji.id}`)
                    .setTimestamp()
                    .setColor("7f0505")
                    .setFooter(`${emoji.client.user.username}#${emoji.client.user.discriminator}`, emoji.client.user.avatarURL())

    c.send(embed)
    });


client.on('roleCreate', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`modlog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`<a:ayarlar:815620596669874176> | Bir Rol oluşturuldu`, ` **Rol İsmi** = ${role.name} \n **Rol İd** = ${role.id} \n **Rol Rengi** = ${role.hexColor}`)                    
.setTimestamp()
.setColor("067a04")
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL())

    channel.send(embed)
});

client.on('roleDelete', async (role) => {    

    const channel = role.guild.channels.cache.get(db.fetch(`modlog_${role.guild.id}`));
  if (!channel) return;
  
    let embed = new Discord.MessageEmbed()
.addField(`<a:duyuru:815620567893016616> | Bir Rol silindi`, ` **Rol İsmi** = ${role.name} \n **Rol İd** = ${role.id} \n **Rol Rengi** = ${role.hexColor}`)                    
.setTimestamp()
.setColor("7f0505")
.setFooter(`${role.client.user.username}#${role.client.user.discriminator}`, role.client.user.avatarURL())

    channel.send(embed)
})




///////////////modlogsonuuu///////////////////////////







///////////capsengel
client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`<:hayr:815620569520406548> | ${msg.author}, Hey Dostum Büyük Harfler Kullanma.`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});
//Caps Engel Bitiş
///////rolkoruma
client.on("roleDelete", async role => {
  let rol = await db.fetch(`rolk_${role.guild.id}`);
  if (rol) { 
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Rol koruma açık olduğundan yetkili tarafından silinen rol tekrar açıldı.'})
  }
})

////////////////kanalkoruma
client.on("channelDelete", async function(channel) {
  let exay = await db.fetch(`kanalk_${channel.guild.id}`);

if (exay) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

channel.clone().then(z => {
  let kanal = z.guild.channels.find(c => c.name === z.name);
  kanal.setParent(
    kanal.guild.channels.find(channel => channel.id === channelp)
    
  );
});
}
})

client.login(ayarlar.token);

client.on("message", msg => {
  if(!db.has(`reklam_${msg.guild.id}`)) return;
         const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
         if (reklam.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                     return msg.reply('**Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? !**').then(msg => msg.delete(3000));
    
  
   msg.delete(3000);                              
  
             }              
           } catch(err) {
             console.log(err);
           }
         }
     });