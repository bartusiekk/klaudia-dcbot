module.exports = (client, message) => {
    if(message.author.bot){
        return;
    }
    if(!message.content.startsWith("k.")){
        return;
    }

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command);
  
    if(!cmd){
        return;
    }

    cmd.run(client, message, args);
};