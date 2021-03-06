const { prefix } = require('../config.json');
module.exports = {
    name: "help",
    description: "Displays a list of commands",
    aliases: ['commands'],
    usage: '!help [command name]',
    cooldown: 5,
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all my commands:\n');
            data.push(commands.map(command => `${command.name}: \`${command.usage}\``).join('\n'));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            data.push(`All commands begin with \"${prefix}\".`)

            return message.author.send(data.join('\n'), { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** \`${command.usage}\``);

        data.push(`**Cooldown:** ${command.cooldown || 1} second(s)`);

        message.channel.send(data, { split: true });
    }
}