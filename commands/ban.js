const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")){
        const noPermBan = new Discord.MessageEmbed()
            .setColor("#d10700")
            .setTitle("🚫 Błąd")
            .setDescription("Nie masz dostępu do tej komendy.")
            .setTimestamp();
        return message.channel.send(noPermBan);
    }
    if(message.member.hasPermission("BAN_MEMBERS")){
        if(!args[0]){
            const noPingBan = new Discord.MessageEmbed()
                .setColor("#d10700")
                .setTitle("🚫 Błąd")
                .setDescription("Oznacz osobę, którą chcesz zbanować.")
                .setTimestamp();
            return message.channel.send(noPingBan);
        }
        const doBan = message.mentions.members.first();
        if(!doBan.bannable){
            const cantBan = new Discord.MessageEmbed()
                .setColor("#d10700")
                .setTitle("🚫 Błąd")
                .setDescription("Nie możesz zbanować tej osoby.")
                .setTimestamp();
            return message.channel.send(cantBan);
        }
        if(!args[1]){
            const noReasonBan = new Discord.MessageEmbed()
                .setColor("#d10700")
                .setTitle("🚫 Błąd")
                .setDescription("Podaj powód zbanowania.")
                .setTimestamp();
            return message.channel.send(noReasonBan);
        }
        if(!doBan){
            const noToBan = new Discord.MessageEmbed()
                .setColor("#d10700")
                .setTitle("🚫 Błąd")
                .setDescription("Nie mogę znaleźć tej osoby.")
                .setTimestamp();
            return message.channel.send(noToBan);
        }
        if(doBan.id === message.author.id) {
            const tryYsBan = new Discord.MessageEmbed()
                .setColor("#d10700")
                .setTitle("🚫 Błąd")
                .setDescription("Nie możesz siebie zbanować...")
                .setTimestamp();
            return message.channel.send(tryYsBan);
        }
        const reason = args.slice(1).join(" ");

        doBan.ban().then(member => {
            const BanMess = new Discord.MessageEmbed()
                .setColor("#00cf29")
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setTitle("✅ Sukces")
                .setDescription(`Polecenie zostało wykonane\n~ **Zbanowano:** ${doBan}\n~ **Moderator:** ${message.member}\n~ **Powód:** ${reason}`)
                .setTimestamp();
            return message.channel.send(BanMess);
        });
  }
}