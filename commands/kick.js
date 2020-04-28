const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("KICK_MEMBERS")){
    const noPermKick = new Discord.MessageEmbed()
        .setColor("#d10700")
        .setTitle("🚫 Błąd")
        .setDescription("Nie masz dostępu do tej komendy.")
        .setTimestamp();
    return message.channel.send(noPermKick);
  }
  if(message.member.hasPermission("KICK_MEMBERS")){
    if(!args[0]){
        const noPingKick = new Discord.MessageEmbed()
            .setColor("#d10700")
            .setTitle("🚫 Błąd")
            .setDescription("Oznacz osobę, którą chcesz wyrzucić.")
            .setTimestamp();
        return message.channel.send(noPingKick);
    }
        const doKick = message.mentions.members.first();
    if(!doKick.kickable){
        const cantKick = new Discord.MessageEmbed()
            .setColor("#d10700")
            .setTitle("🚫 Błąd")
            .setDescription("Nie możesz wyrzucić tej osoby.")
            .setTimestamp();
        return message.channel.send(cantKick);
    }
    
    if(!args[1]){
        const noReasonKick = new Discord.MessageEmbed()
            .setColor("#d10700")
            .setTitle("🚫 Błąd")
            .setDescription("Podaj powód wyrzucenia.")
            .setTimestamp();
        return message.channel.send(noReasonKick);
    }
    if(!doKick){
        const noToKick = new Discord.MessageEmbed()
            .setColor("#d10700")
            .setTitle("🚫 Błąd")
            .setDescription("Nie mogę znaleźć tej osoby.")
            .setTimestamp();
        return message.channel.send(noToKick);
    }
    if(doKick.id === message.author.id) {
        const tryYsKick = new Discord.MessageEmbed()
            .setColor("#d10700")
            .setTitle("🚫 Błąd")
            .setDescription("Nie możesz siebie wyrzucić...")
            .setTimestamp();
        return message.channel.send(tryYsKick);
    }
    const reason = args.slice(1).join(" ");

    doKick.kick().then(member => {
        const KickMess = new Discord.MessageEmbed()
            .setColor("#00cf29")
            .setTitle("✅ Sukces")
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`Polecenie zostało wykonane\n~ **Wyrzucono:** ${doKick}\n~ **Moderator:** ${message.member}\n~ **Powód:** ${reason}`)
            .setTimestamp();
        return message.channel.send(KickMess);
    });
  }
}