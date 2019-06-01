const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '!';

client.on('message', msg => {
    
  //Returns if author is a bot
  if(msg.author.bot) return;
  
  var lowtext = msg.content.toLowerCase();
    
  //Returns if message doesn't start with prefix
  if(!msg.content.startsWith(prefix)) return;
    
  //Handles arguments to just take the first word
  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase(); 
  
  //AURA - ADD/REMOVE DREAM ROLES
  if (command == 'aura') {       
    var rolename = args[0];
    if (!rolename) return msg.reply("No has puesto ningún rol!")
        
    var therole = msg.guild.roles.find("name", rolename);
    if (!therole) return msg.reply("Este rol no existe!")
      
    if (msg.member.roles.has(therole.id)) {
        msg.member.removeRole(therole);
        msg.reply("Role eliminado!");
    }
    else {
        msg.member.addRole(therole);
        msg.reply("Role añadido!");
    }
  } /END AURA
    
  if (command == 'iconos') {
      var iconlink = 'https://indreams.me/guide/icons';
      msg.channel.send(["La lista de iconos en Dreams puede encontrarse aquí: ", iconlink]);
  }
  
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
