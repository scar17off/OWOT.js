var WebSocket = require('ws');

var OWOTJS = class OWOTJS{
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
