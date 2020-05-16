// get configuration file
const { prefix, token } = require('./config.json');

// node file system
const fs = require('fs');

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// commands collection
client.commands = new Discord.Collection();

//dynamic commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

//command cooldowns
const cooldowns = new Discord.Collection();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', async () => {
    console.log(`Ready!`);
});


// login to Discord with your app's token
client.login(token);

client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
});

//everytime a message is sent begin running checks
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    //check for the command
    if (!command) return message.reply('This is not an available command.');
    //check for args
    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    //check for guild and dm only error
    if (command.guildOnly && command.dmOnly) {
        message.channel.send("This command is conflicted. It is set to guild only and DM only.");
        return console.log(`${command.name} is conflicted. It is set to guild only and DM only.`);
    }
    //check for guild only
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }
    //check for dm only
    if (command.dmOnly && message.channel.type === 'text') {
        return message.reply('I can only execute that command inside DMs!');
    }
    //check cooldown
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }

    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    //run the command
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});
