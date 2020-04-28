const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");
const Enmap = require("Enmap");

client.config = config;

client.on('ready', () => {
    console.log('Jestem gotowa do pracy.');
    client.user.setActivity({
        name: "k.help | v1.0 ;]",
        type: "WATCHING"
    });
})

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  });

client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Ladowanie komendy ${commandName}`);
    console.log('Zaladowano');
    client.commands.set(commandName, props);
  });
});

client.login(config.token);