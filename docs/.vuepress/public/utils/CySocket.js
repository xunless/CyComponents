var protobuf = require('@/utils/weichatPb/protobuf.js')
var sendConfig = require('@/utils/proto/SocketSend.js')
var sendRoot = protobuf.Root.fromJSON(sendConfig)
var sendMessage = sendRoot.lookupType('Message')
var resultMessage = sendRoot.lookupType('ResultMessage')

export function CySocket(config) {
	this.server = config ? config.server || "" : "";
	this.autoReconnect = config ? config.autoReconnect || "" : true;
	var socket;
	var times = 0; //尝试连接三次
	var interval;
	var cySocket = this;
	this.init = function(callback) {
		if (this.server === "") {
			console.error("服务器地址不能为空:)");
			return;
		}
		if (interval) {
			clearInterval(interval);
			interval = null;
			times = 0;
		}
		try {
			if (socket && socket.readyState === 1) return;
			socket = new WebSocket(this.server);
			socket.onopen = function(data) {
				if (config && config.openSocket) config.openSocket.call(cySocket, data);
			}
			socket.binaryType = "arraybuffer";
			socket.onmessage = function(msg) {
				// 处理返回的数据
				let typedArray = new Uint8Array(res.data)
				let arr = typedArray.slice(9, typedArray.length - 1)
				console.log(arr);
				const result = resultMessage.decode(arr)
				if (config && config.receiveMsg) config.receiveMsg.call(cySocket, result);
			}
			interval = setInterval(function() {
				if (socket.readyState !== 1) {
					if (times > 2) {
						clearInterval(interval);
						interval = null;
						times = 0;
						//                      console.log("无法连接到服务器...:)");
						return;
					} else {
						//                      console.log("通讯异常,正在尝试重连...:)");
						if (socket) {
							socket.close();
						}
						socket = new WebSocket(config.server);
					}
					times++;
				} else {
					clearInterval(interval);
					interval = null;
					times = 0;
					//                  console.log("已经连接到服务器");
				}
			}, 5000);
			if (typeof(callback) === "function") callback.call(cySocket);
		} catch (e) {
			console.log(e.message);
			if (this.autoReconnect) {
				this.init(callback);
			}
		}
	}

	this.close = function() {
		if (interval) {
			clearInterval(interval);
			interval = null;
			times = 0;
		}
		if (socket && socket.readyState === 1) {
			socket.close();
		}
	}
	
	/**
  * @author: champoin
  * @param {string} fixa 后端固定的四位字符串
	* @param {object} obj 需要传过来的对象 
  * @return: 
  * @Date: 2020-06-10 10:22:08
  */ 
 this.sendMsg = function(fixa, obj) {
		if (!socket || socket.readyState !== 1) {
			this.init(config);
		}


		var message = sendMessage.create(obj)
		var buffer = sendMessage.encode(message).finish()

		const arrayBuffer = new ArrayBuffer(buffer.length + 10)

		let dataView = new DataView(arrayBuffer);

		dataView.setInt32(0, buffer.length + 10, true); //指定小端，主机字节序设置
		for (let i = 0; i < buffer.length; i++) {
			dataView.setUint8(i + 9, buffer[i]);
		}

		let utils = protobuf.util
		const bytes = utils.stringToBytes(fixa) // 前面4位转换为bytes数组
		console.log(bytes, '55-----');
		const type = new Uint8Array(bytes) // 前面4位


		for (let i = 0; i < type.length; i++) {
			dataView.setUint8(i, type[i]);
		}

		dataView.setUint8(7, buffer.length + 10);

		// 转换为可操作的数组 TypedArray
		const typeArray = new Uint8Array(dataView.buffer)
		console.log(type);

		let init
		for (let item of typeArray) { // 循环全部的值
			init ^= item // 获取异或值
		}
		console.log(init);
		// dataView.setUint8(dataView.byteLength - 2, 0x0D);
		dataView.setUint8(dataView.byteLength - 1, init); // 最后一位设置异或值
		console.log(dataView.buffer);



		if (socket && socket.readyState === 1)
			socket.send(dataView.buffer);
	}
	this.checkSocketState = function() {
		return socket.readyState;
	}

}