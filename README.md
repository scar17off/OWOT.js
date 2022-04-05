# OWOT.js
#### Installation
Put the "owot.js" file in your bot folder.
#### Basic bot example
```js
const OWOTJS = require("./OWOT.js");

var bot = new OWOTJS.Client({});
bot.world.connect();
bot.on("join", () => {
	bot.utils.log("Ready!");
});
```
#### Options
`Origin` - optional ("https://ourworldoftext.com/" by default)\
`WS` - optional ("wss://ourworldoftext.com/ws/" by default)\
`chunkSize` - optional (16 by default)\
`nickname` - optional\
`log` - optional Logs basic events to your console.

#### Events
`join` - Opened WS\
`close` - Closed WS\
`disconnect` - Disconnected WS\
`chat` - New message in chat (returns Object)\
`tileUpdate` - Tile updates.
# API
### bot.EE
EventEmitter
### bot.world.protect
#### bot.world.protect(0, 0, 'owner') // chunkX, chunkY, type
Protect chunk
### bot.world.move
#### bot.world.move(x, y)
Move your bot away
### bot.world.setChar
#### bot.world.setChar('a', 0, 0, 1577151) // char, x, y, color
Set char (not works i think)
### bot.world.connect
#### bot.world.connect('world') // world name
Connect bot to your world. Leave blank to connect to main
### bot.world.leave
#### bot.world.leave()
Disconnect bot
### bot.chat.send
#### bot.chat.send("Hello from Browser OWOT.js!", true); // message, globalChat
Send message. can work without a second argument
