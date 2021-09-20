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
var OWOTJS = class OWOTjs extends EventEmitter{
	constructor(options = {}){
		super();
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
			autoNickname: options.nickname
		};
		OTS.chat = {
			setNickname: (nickname) => {
				let array = new ArrayBuffer(2);
				let dv = new DataView(array);
				dv.setUint8(1, `${owot}.chat.send("/nick ${OTS.options.autoNickname}")`);
				ws.send(array);
			},
			send: (message) => {
				let array = new ArrayBuffer(2);
				let dv = new DataView(array);
				dv.setUint8(1, `${owot}.chat.send("${message}")`);
				ws.send(array);
			}
		};
		OTS.world = {
			setChar: (char, moveCursor, color, newLine) => {
				let array = new ArrayBuffer(2);
				let dv = new DataView(array);
				dv.setUint8(1, `${owot}.typeChar("${char}", ${moveCursor}, ${color}, ${newLine})`);
				ws.send(array);
			},
			connect: (world) => {
				var ws = new WebSocket(OTS.options.ws, null, {
                	headers: {'Origin': OTS.options.origin}
            	});
            	ws.binaryType = "arraybuffer";
            	ws.onopen = () => {
            		if(!ws) return;
					OTS.player.joined = true;
					if(!options.nickname) return;
					else {
						let array = new ArrayBuffer(2);
						let dv = new DataView(array);
						dv.setUint8(1, `${owot}.chat.send("/nick ${OTS.options.autoNickname}")`);
						ws.send(array);
					};
            	};
            	ws.onclose = () => {
            		OTS.player.joined = false;
            		OWOTS.localMessage("[OWOP.js] Bot disconnected.");
            	};
			},
			leave: () => {
				ws.close();
				OTS.player.joined = false;
			}
		};
		OTS.misc = {
			teleport: (x,y) => {

			}
		};
	};
};
let options = {
	origin: "https://ourworldoftext.com/", // https://ourworldoftext.com/
	ws: "wss://ourworldoftext.com/ewerqr/ws/", // wss://ourworldoftext.com/world/ws/ // wss://ourworldoftext.com/ws/
	nickname: "somenick"
};
var OWOTjs = new OWOTJS(options);
