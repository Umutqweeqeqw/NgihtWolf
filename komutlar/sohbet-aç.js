const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });

  message.channel.send("Sohbet Kanalı Başarılı Bi Şekilde Açıldı!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sohbet-aç","chat-on"],
  kategori: "sohbet-aç",
  permLevel: 3
};

exports.help = {
  name: "sohbet-aç",
  description: "Sohbetinizi kapatmaya yarar.",
  usage: "kapat"
};