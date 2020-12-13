# Installation

```
npm install disco-math.js
```
In the console/terminal.

# Usage

## Add

```js
const discordMath = require("disco-math.js");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (message.content.startsWith(`${prefix}add`)) {
        discordMath.add(args[1], args[2], message)
    }
})

client.login("SuperSecretToken")
```

## Sub

```js
const discordMath = require("disco-math.js");
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (message.content.startsWith(`${prefix}sub`)) {
        discordMath.sub(args[1], args[2], message)
    }
})

client.login("SuperSecretToken")
```

## Multiply

```js
const discordMath = require("disco-math.js");
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (message.content.startsWith(`${prefix}multiply`)) {
        discordMath.multiply(args[1], args[2], message)
    }
})

client.login("SuperSecretToken")
```

## Divide 

```js
const discordMath = require("disco-math.js");
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (message.content.startsWith(`${prefix}divide`)) {
        discordMath.divide(args[1], args[2], message)
    }
})

client.login("SuperSecretToken")
```