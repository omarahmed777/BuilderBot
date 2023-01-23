const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = process.env['token'];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'toplane') {
    await interaction.reply('YOU WILL PLAY: ' + topArr[getRandomElement(topArr)].toString);
  } else if (interaction.commandName === 'jungle') {
    await interaction.reply('jng');
  } else if (interaction.commandName === 'midlane') {
    await interaction.reply('mid');
  } else if (interaction.commandName === 'botlane') {
    await interaction.reply('bot');
  } else if (interaction.commandName === 'support') {
    await interaction.reply('supp');
  }
});
client.login(token);

//Gets a random element of the array depending on role entered
function getRandomElement(arr) {
  //const randomElement = arr[Math.floor(Math.Random() * arr.length)];
  return arr[0];
}

/*

LIST OF ALL ARRAYS
PROGRAMMING GORE BELOW
YOU HAVE BEEN WARNED
*/

const topArr = [
  'Aatrox',
  'Akali',
  'Akshan',
  'Camille',
  'Cassiopeia',
  "Cho'Gath",
  'Darius',
  'Dr. Mundo',
  'Fiora',
  'Gangplank',
  'Garen',
  'Gnar',
  'Gragas',
  'Gwen',
  'Heimerdinger',
  'Illaoi',
  'Irelia',
  'Jax',
  'Jayce',
  "K'Sante",
  'Karma',
  'Kayle',
  'Kennen',
  'Kled',
  'Malphite',
  'Maokai',
  'Mordekaiser',
  'Nasus',
  'Olaf',
  'Ornn',
  'Pantheon',
  'Poppy',
  'Quinn',
  'Renekton',
  'Rengar',
  'Riven',
  'Rumble',
  'Ryze',
  'Sejuani',
  'Sett',
  'Shen',
  'Singed',
  'Sion',
  'Sylas',
  'Tahm Kench',
  'Teemo',
  'Tryndamere',
  'Udyr',
  'Urgot',
  'Vayne',
  'Vladimir',
  'Volibear',
  'Warwick',
  'Wukong',
  'Yasuo',
  'Yone',
  'Yorick',
  'Zac'
];

const jngArr = [
  'Amumu',
  "Bel'Veth",
  'Diana',
  'Ekko',
  'Elise',
  'Evelynn',
  'Fiddlesticks',
  'Gragas',
  'Graves',
  'Hecarim',
  'Ivern',
  'Jarvan IV',
  'Jax',
  'Karthus',
  'Kayn',
  "Kha'Zix",
  'Kindred',
  'Lee Sin',
  'Lillia',
  'Maokai',
  'Master Yi',
  'Mordekaiser',
  'Nidalee',
  'Nocturne',
  'Nunu & Willump',
  'Olaf',
  'Poppy',
  'Rammus',
  "Rek'Sai",
  'Rengar',
  'Sejuani',
  'Shaco',
  'Shyvana',
  'Skarner',
  'Sylas',
  'Taliyah',
  'Talon',
  'Trundle',
  'Udyr',
  'Vi',
  'Viego',
  'Volibear',
  'Warwick',
  'Wukong',
  'Xin Zhao',
  'Zac',
  'Zed'
];

const midArr = [
  'Ahri',
  'Akali',
  'Akshan',
  'Anivia',
  'Annie',
  'Aurelion Sol',
  'Azir',
  'Cassiopeia',
  'Corki',
  'Diana',
  'Ekko',
  'Fizz',
  'Galio',
  'Gangplank',
  'Gragas',
  'Heimerdinger',
  'Irelia',
  'Jayce',
  'Karma',
  'Kassadin',
  'Katarina',
  'LeBlanc',
  'Lissandra',
  'Lux',
  'Malphite',
  'Malzahar',
  'Neeko',
  'Orianna',
  'Pantheon',
  'Qiyana',
  'Renekton',
  'Rumble',
  'Ryze',
  'Seraphine',
  'Sett',
  'Singed',
  'Swain',
  'Sylas',
  'Syndra',
  'Taliyah',
  'Talon',
  'Tristana',
  'Twisted Fate',
  'Twitch',
  'Varus',
  'Veigar',
  "Vel'Koz",
  'Vex',
  'Viktor',
  'Vladimir',
  'Xerath',
  'Yasuo',
  'Yone',
  'Zac',
  'Zed',
  'Ziggs',
  'Zilean',
  'Zoe'
]

const botArr = [
  'Aphelios',
  'Ashe',
  'Caitlyn',
  'Draven',
  'Ezreal',
  'Jhin',
  'Jinx',
  "Kai'Sa",
  'Kalista',
  'Karthus',
  "Kog'Maw",
  'Lucian',
  'Miss Fortune',
  'Nilah',
  'Samira',
  'Seraphine',
  'Sivir',
  'Swain',
  'Tristana',
  'Twitch',
  'Varus',
  'Vayne',
  'Xayah',
  'Yasuo',
  'Zeri',
  'Ziggs'
]

const suppArr = [
  'Alistar',
  'Amumu',
  'Ashe',
  'Bard',
  'Blitzcrank',
  'Brand',
  'Braum',
  'Heimerdinger',
  'Janna',
  'Jhin',
  'Karma',
  'Leona',
  'Lulu',
  'Lux',
  'Maokai',
  'Morgana',
  'Nami',
  'Nautilus',
  'Pantheon',
  'Pyke',
  'Rakan',
  'Rell',
  'Renata Glasc',
  'Senna',
  'Seraphine',
  'Shaco',
  'Sona',
  'Soraka',
  'Swain',
  'Taric',
  'Thresh',
  'Twitch',
  "Vel'Koz",
  'Xerath',
  'Yuumi',
  'Zac',
  'Zilean',
  'Zyra'
]