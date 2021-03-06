//READY CODE
const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'bot prefix'
module.exports = client => {
  
  const aktiviteListesi = [
    `Bot İle İlgili Herhangi bi Sorun İçin Destek Sunucumuza Gel!`,
    `0.0.7 Sürümünü`,
    `/destekçiler 💫`,
    `/sunucutanıt ile Sunucunuzun Reklamını Yapın`,
    `134 Komut💥`,
    `🔫 /güvenlik`,
  ]

  client.user.setStatus('online')
  //dnd 
  //idle
  //online
  //offline
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite], { type: 'PLAYING'});
  }, 5000)
}


//  WATCHING :  izliyor
//  LISTENING :  dinliyor
//  PLAYING  :  oynuyor