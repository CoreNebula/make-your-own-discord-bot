module.exports = {
    name: 'ping',
    description: 'Ping.',
    usage: '!ping [user]',
    aliases: ['test', 'check'], 
    dmOnly: false,
    guildOnly: false,
    args: false,
    cooldown: 3,
    execute(message, args) {
        if (args[0]) {
            try {
                target = message.mentions.users.first();
                target.send('pong')
            } catch (e) {
                message.reply('You did not tag a valid user.');
            }
            return
        }
        message.channel.send('pong');
        message.reply('pong');
    },
};