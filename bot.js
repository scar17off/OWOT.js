const OWOTJS = require("./owot.js");

var bot = new OWOTJS.Client({});
bot.world.connect();
bot.on("join", () => {
	bot.utils.log("Ready!");
});
