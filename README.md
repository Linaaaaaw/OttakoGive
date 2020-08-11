# Giveaways Bot

🎁Giveways Bot utilise [discord-giveaways](https://npmjs.com/discord-giveaways) package.

## Features

* commande `start-giveaway`
* commande `reroll-giveaway`
* commande `end-giveaway`

<img src='./examples/start-cmd.png' style="width: 50%;"></img>
<img src='./examples/giveaway.png' style="width: 50%;"></img>

## Install

* Fill configuration (config.json):
```json
{
    "token": "Your discord bot token",
    "prefix": "g!",
    "everyoneMention": true,
    "hostedBy": true
}
```

* Install dependencies:
```sh
npm install
```

* Start:
```sh
node index.js
```
