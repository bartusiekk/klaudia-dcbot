const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const msg = await message.channel.send("🏓 Pingowanie...");
    const pingEmbed = new Discord.MessageEmbed()
        .setColor("#00cf29")
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setTitle("**🏓 Pong!**")
        .setDescription(`Opóźnienie wiadomości wynosi\n   \`${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\`.`, true)
        .setTimestamp();
    msg.edit(pingEmbed);
};