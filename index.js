const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const token = process.env['token'];
const CLIENT_ID = process.env['client_id'];
const GUILD_ID = process.env['guild_id'];

const commands = [
  {
    name: 'toplane',
    description: 'Replies with a top lane suggestion!'
  }, {
    name: 'jungle',
    description: 'Replies with a jungle suggestion!'
  }, {
    name: 'midlane',
    description: 'Replies with a mid lane suggestion!'
  }, {
    name: 'botlane',
    description: 'Replies with a bot lane suggestion!'
  }, {
    name: 'support',
    description: 'Replies with a support suggestion!'
  }, {
    name: 'champion',
    description: 'Returns random champion, Add argument for specific lane',
    options: [{
      name: "role",
      description: "The role you want",
      type: 3,
      required: true
     }
    ]
   }];
  
console.log(CLIENT_ID);
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
