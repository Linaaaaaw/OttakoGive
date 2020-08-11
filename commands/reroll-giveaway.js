const ms = require('ms');

exports.run = async (client, message, args) => {

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(":x: Vous n'avez pas la permission !");
    }

    // If no message ID or giveaway name is specified
    if(!args[0]){
        return message.channel.send(':x: Vous devez spécifier un ID de message valide!');
    }

    // try to found the giveaway with prize then with ID
    let giveaway = 
    // Search with giveaway prize
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    // Search with giveaway ID
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    // If no giveaway was found
    if(!giveaway){
        return message.channel.send('Impossible de trouver un cadeau pour `'+ args.join(' ') +'`.');
    }

    // Reroll the giveaway
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        // Success message
        message.channel.send('Giveaway relancé !');
    })
    .catch((e) => {
        if(e.startsWith(`Le giveaway ${giveaway.messageID} n'est pas terminé !`)){
            message.channel.send('Ce cadeau est déjà terminé.');
        } else {
            console.error(e);
            message.channel.send("Une erreur s'est produite...");
        }
    });

};
