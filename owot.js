var WebSocket = require('ws');

var OWOTJS = class OWOTJS{
	constructor(options = {}){
		super();
		var OTS = this;

		OTS.player {var WebSocket = require('ws');

class OWOTjs{
	constructor(options = {}){
		super();
		var OTS = this;

		OTS.player {
			color: null,
			rank: null,
			id: null
			x: 0,
			y: 0
		};
		OTS.options = {
			origin: options.origin,
			ws: options.ws,
			chunkSize: 16,
			playerJoined: false;
		};
		OTS.chat = {
			setNickname: function(nickname) {
				if(!ws) return;
				else continue;
				ws.send(`/nick `+nickname);
			};
			send: function(tosend) {
				if(!ws) return;
				else continue;
				ws.send(msg);
			};
		};
		OTS.world = {
			setChar: function(char, x, y) {
				ws.send(array);
			};
			connect: function() {
				var ws = new WebSocket(, undefined, {
                	headers: {'Origin': OTS.options.origin}
            	});
            	ws.on("open", () => {
            		if(!ws) return;
					else continue;
					OTS.player.joined = true;
            	});
			};
			leave: function() {
				ws.close();
				OTS.player.joined = false;
			};
			setColor: function() {
				ws.send(array);
			}
		};
		OTS.misc = {
			teleport: function(x,y) {

			};
		};
	};
};

module.exports = {OTS};
			color: null,
			rank: null,
			id: null
			x: 0,
			y: 0
		};
		OTS.options = {
			origin: options,
			ws: ws,
			chunkSize: 16
		};
		OTS.chat = {
			setNickname: function(nickname) {
				ws.send(`/nick `+nickname);
			};
			send: function(tosend) {
				ws.send(msg);
			};
		};
		OTS.world = {
			setChar: function(char,x,y) {
				
			};
			connect: function() {
				var ws = new WebSocket(, undefined, {
                	headers: {'Origin': OTS.options.origin}
            	});
			};
			join: function (world) {

			};
			leave: function(world) {

			};
		};
		OTS.misc = {
			teleport: function(x,y) {

			};

		};
	};
};
