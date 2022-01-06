function append(src, onload) {
    var s = document.createElement('script');
    s.src = src;
    s.onload = onload;
    document.body.appendChild(s);
}
append("https://raw.githack.com/Olical/EventEmitter/master/EventEmitter.min.js");
/* 
OWOT For Scripters Lib
by scar17off
*/
// @name         OWOT For Scripters
// @version      1.2
// @description  Easy lib for OWOT Scripters.
// @author       scar17off / jau
// @match        https://ourworldoftext.com/*
var _OWOTS = class OWOTSjs {
    constructor(){
        this.owot = OWOT;
        this.defaultChar = "█";
    };
    setChar(char, hexColor){
        var hecc = ("00000" + hexColor.toString(16)).slice(-6);
        var decimalColor = parseInt(hecc, 16);
        return writeChar(char, false, decimalColor, false);
    };
    pasteImage(url, scale){
        var hex = (dec) => {
            dec = Math.floor(dec);
            return (dec < 16 ? "0" : "") + dec.toString(16)
        },
        img = new Image(),
        canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");
        img.crossOrigin = "Anonymous";
        img.src = url;
        img.onload = () => {
            canvas.width = img.width / 10 * scale;
            canvas.height = img.height / 18 * scale;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data,
            str = "";
            for (var i = 0; i < canvas.height * canvas.width * 4; i += canvas.width * 4) {
                for (var j = 0; j < canvas.width * 4; j += 4) {
                    let alpha = data[i + j + 3] / 255;
                    var color = hex(data[i + j] * alpha + 255 - data[i + j + 3]) + hex(data[i + j + 1] * alpha + 255 - data[i + j + 3]) + hex(data[i + j + 2] * alpha + 255 - data[i + j + 3]);
                    this.setChar(this.defaultChar, color);
                };
                return writeChar("\n");
            };
        }
    };
    localMessage(prefix, message){
        console.log("@"+message);
        return addChat(null,0,"",prefix+message);
    };
    sendMessage(message){
        return api_chat_send(message);
    };
};
var OWOTS = new _OWOTS();
/*
	OWOT.js Library
	by scar17off
*/
function getRandomInt(min, max) {
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min;
}
var OWOTJS = class OWOTjs{
	constructor(options = {}){
		var ws;
		var OTS = this;
		var owot = OWOT;

		OTS.player = {
			color: null,
			rank: null,
			id: null,
			x: 0,
			y: 0
		};
		OTS.options = {
			origin: options.origin,
			ws: options.ws,
			chunkSize: 16,
			playerJoined: false,
			nickname: options.nickname,
			realNickname: options.realname,
			id: options.id,
			registered: options.registered,
			op: options.op,
			admin: options.admin,
			staff: options.staff,
			world: options.world,
			color: options.color
		};
		if(!OTS.options.world){
			OTS.options.world = state.worldModel.pathname;
		}
		if(!OTS.options.color){
			OTS.options.color = "#8c00ff"; // bjc back color lol
		};
		if(!OTS.options.origin){
			OTS.options.origin = "https://ourworldoftext.com/";
		};
		if(!OTS.options.ws){
			OTS.options.ws = "wss://ourworldoftext.com/ws/";
		};
		if(!OTS.options.nickname){
			OTS.options.nickname = "by scar17off";
		};
		if(!OTS.options.realname){
			OTS.options.realname = "by scar17off";
		};
		if(!OTS.options.id){
			OTS.options.id = getRandomInt(1, 9999).toString();
		};
		if(!OTS.options.registered){
			OTS.options.registered = false;
		};
		if(!OTS.options.op){
			OTS.options.op = false;
		};
		if(!OTS.options.admin){
			OTS.options.admin = false;
		};
		if(!OTS.options.staff){
			OTS.options.staff = false;
		};
		OTS.chat = {
			setNickname: (nickname) => {
				ws.send(JSON.stringify({
					"kind":"chat",
					"channel":"4d10c7c24fbc12",
					"nickname": OTS.options.nickname,
					"realUsername": OTS.options.realname,
					"id": OTS.options.id,
					"message": "/nick "+nickname,
					"registered": OTS.options.registered,
					"location":"page",
					"op": OTS.options.op,
					"admin": OTS.options.admin,
					"staff": OTS.options.staff,
					"color": OTS.options.color,
					"date":0,
					"source":"chat"
				}));
			},
			send: (message) => {
				ws.send(JSON.stringify({
					"kind":"chat",
					"channel":"4d10c7c24fbc12",
					"nickname": OTS.options.nickname,
					"realUsername": OTS.options.realname,
					"id": OTS.options.id,
					"message": OTS.message,
					"registered": OTS.options.registered,
					"location":"page",
					"op": OTS.options.op,
					"admin": OTS.options.admin,
					"staff": OTS.options.staff,
					"color": OTS.options.color,
					"date":0,
					"source":"chat"
				}))
			}
		};
		OTS.world = {
			setChar: (char, moveCursor, color, newLine) => {
				let xhttpt = new XMLHttpRequest();
				xhttpt.open("POST", OTS.options.origin);
				xhttpt.responseType = "text";
				xhttpt.send({
					"edits": JSON.stringify({}); // coming soon
				});
			},
			connect: () => {
				ws = new WebSocket(OTS.options.ws, null, {
                	headers: {'Origin': OTS.options.origin}
            	});
            	ws.onopen = () => {
            		if(!ws) return;
					OTS.player.joined = true;
            	};
            	ws.onclose = () => {
            		OTS.player.joined = false;
            		OWOTS.localMessage("[OWOT.js] Bot disconnected.");
            	};
            	OTS.ws = ws;
			},
			leave: () => {
				ws.close();
				OTS.player.joined = false;
			}
		};
	};
};

let options = {
	
};
var OTS = new OWOTJS(options);
OTS.world.connect();
//OTS.chat.send("Hello from Browser OWOT.js!");
