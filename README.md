# Installation

```
npm install disco-math.js
```

## Add

```js
const discordMath = require("disco-math.js");
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    const prefix = "!";
    const args = message.content.slice(prefix.length).trim().split(' ');
    if (message.content.startsWith("!add")) {
        discordMath.add(args[1], args[2], message)
    }
})

client.login("SuperSecretToken")

```