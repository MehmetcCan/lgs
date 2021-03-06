exports.run = async (client, msg, args) => {
    let kapak=[
       "hepinizin götü yer çekimine meydan okuyo",
       "✦　　* .　　　 . 　　*　　.　　　　.　　 　*　.　　　　　*　　   　　　　　 ✦ 　　　　　　　         　   *  　　　　.　　　* 　.　　　*　　.　　　　　✦　. ✦　　* .　　　 . 　　*　.　　　　.　　 　",
       "yolunu kaybetmiş o tiplerdenim",
       "Bu hayattaki tek felsefem… Sokarım sana da yaşatacaklarına da!...",
       "suç bende yada yalanlarda yada yanıp kül olmuş yangınlarda..",
       "AWM Gibiyim Varlığım Olay Yokluğum Koyar",
       "Sadece büyük acılar çekenler mutluluğun anlamını bilirler. Şehirlere sığmayacak acıları, küçücük odalarda çekiyoruz.",
       "Alçaklık Sadece Arabalara Yakışan Bir Eylemdir,KİŞİLİĞİNİZDE DENEMEYİN...",
       "Ben Yenilmeyeni Temsil Ederim...",
       "belki sarayımız yoktu ama biz hep kraldık..",
       "Büyük Şeylerin Küçük Başlangıçları Vardır",
       "Ölüm hayattaki en büyük kayıp değildir. En büyük kayıp, biz yaşarken içimizde ölen şeydir",
       "Bikaç Orospu cocğundan Başka birşey değilsiniz",
       "KRAL OLSANIZ NE YAZAR TRİLYON OLSANIZ TEK GECEDE HARACARIM",
       "Bazen sadece o olmak istersin, gökyüzü olmak. Bir yıldız gibi parlamak.",
       "Efsaneler der ya, her gökkuşağının altında bir hazine yatarmış. Sen benim gökkuşağımın sonu, en değerli hazinemsin...",
       "Öldüm Görmedi Belkide Gözleri Kördü.?",
       "Sen ne rahat bi ibnesin, fena bir triptesin.",
       "Düşmanıma dostluk yapanda düşmanımdır",
       "Zor gününde yanındaydım ben düşünce neden yoktun?",
       "Sizi Bizim Nefretimizden Allah Korusun",
       "İt havladı diye aslan ölmez",
       "Zaman her şeyin ilacıysa, fazlası intihara girmez mi?",
       "Hayatta keşke kaybettiğimiz şeyleri tekrar alabilsek ne güzel olurdu ama olmuyor...♥",
       "Yok olunca mı özleyeceksin beni.",
       "değmeyen birine dönüp bakmam ben. Adamsa NOTUNU Hayvansa OTUNU verir giderim :)",
       "Sen gülümseki kalbinin güzelliği yüzüne vursun.)",
       "Kaybettikçe gülüyoruz bizi yenemezler...!",
       "En Çokta kendime kızıyorum... Ne diye her havlayana cevap veriyorum hoşt de geç dimi!",
       "Adalet Olmayan Dünyada Adalet Sarayı Kurmuşlar",
       "Uzakta olan güzel olmasaydı, bu kadar bakar mıydı gözler uzağa?",
       "Önce hayaller ölür, sonra insan.",
       "Beynimin İçinde Pandalar Sikişiyor",
       "Kimine göre kral, kimine göre yalanım... Unutmayın beyler adamına göre adamım... .",
       "Silahları bırakmak, pes etmek, savaşla yüz yüze kalınca tarafsız kalmak değil, teslim olmaktır!",
       "Her şeyi gördüm. İyi günde hayatıma tünel kazarak girenlerin, zor günümde arka kapıdan sessizce kaçışlarını gördüm.",
       "Kaybettim tüm kazandıklarımı...",
       "Deli Tarafıma Denk Gelme Orda (isim) Bile Hükümsüz",
       "Her ağlayan güçsüz degildir tıpkı her gülenin mutlu olmadığı gibi 🚬🌙",
       "Bir Gülüşü Var %1 Şarj İle Parlaklık Açtırır.",
       "Kimseyle düşman olduğumuz yok herkese kapımız açık :))",
       "Boş insanların boş tavırları . . .",
       "Ve mutluluk artık bir kibrit çöpü, artık ne kadar yanarsa",
       "yabancı bir şarkı gibiyim, dinleyenim çok anlayanım yok",
       "Üç tane polis beni aldıklarında anladım ki üç yanlış bir doğruyu götürüyormuş...",
       "Çok isteyen değil bedel ödeyen alır..",
       "██████╗███████╗ ██╔════╝╚════██║ █████╗░░░░███╔═╝ ██╔══╝░░██╔══╝░░ ███████╗███████╗ ╚══════╝╚══════╝",
       "10:27-━━━●━━━━27:30 ◁　　❚❚　　▷"


    ]
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${kapak[Math.floor(Math.random() * 50)]}.`)
    }})
    }
    
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Havalıdurum','havalı-durum'],
    permLevel: 0
   };
   
  exports.help = {
    name: 'havalıdurum',
    description: 'Etiketlediniz Kişiye Havalı Durum Söyler.',
    usage: 'havalıdurum'
   }