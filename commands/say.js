const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        const noPermSay = new Discord.MessageEmbed()
            .setColor("#d10700")
            .setTitle("🚫 Błąd")
            .setDescription("Nie masz dostępu do tej komendy.")
            .setTimestamp();
        return message.channel.send(noPermSay);
      }
    if(message.member.hasPermission("MANAGE_MESSAGES")){
        if(!args[0]){
            const noColorSay = new Discord.MessageEmbed()
                .setColor("#d10700")
                .setTitle("🚫 Błąd")
                .setDescription("Podaj kolor.")
                .setTimestamp();
            return message.channel.send(noColorSay);
        }
        if(!args[1]){
            const nothingSay = new Discord.MessageEmbed()
                .setColor("#d10700")
                .setTitle("🚫 Błąd")
                .setDescription("Napisz, co chcesz wysłać.")
                .setTimestamp();
            return message.channel.send(nothingSay);
        }
        if(args[1]){
            const TextOfSay = args.slice(1).join(" ");
            const ChooseColor = args[0];
            const SayMessage = new Discord.MessageEmbed()
                .setColor(ChooseColor)
                .setAuthor(message.author.tag, message.author.displayAvatarURL())
                .setTitle("📣 Ogłoszenie")
                .setDescription(TextOfSay)
                .setTimestamp();
            return message.channel.send(SayMessage);
        }
    }
};