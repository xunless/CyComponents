var protobuf = require('@/utils/weichatPb/protobuf.js')
var sendConfig = require('@/utils/proto/SocketSend.js')
var sendRoot = protobuf.Root.fromJSON(sendConfig)
var sendMessage = sendRoot.lookupType('Message')
var resultMessage = sendRoot.lookupType('ResultMessage')
export default class Socket {
	constructor({url}) {
		this.url = url
	}
	connect() {
		uni.connectSocket({
			url: this.url,
			success:res => {
				console.log(res);
			}
		})
	}
	// 初始化
	init() {
		this.connect()
		this.socketOpen()
		this.socketError()
	}
	socketOpen() {
		uni.onSocketOpen(function(open){
			console.log(open + '连接打开');
		})
	}
	socketError() {
		uni.onSocketError(function(err){
			console.log(err + '连接失败');
		})
	}
	
	/**
	 * 发送消息
	 * @param {string} fixa 前面4位字符串
	 * @param {object} obj 需要发送消息的对象
	 * @memberof Socket
	 */
	send(fixa, obj) {
		/* 
			规则：
			0x41,0x53,0x58,0x43  前固定4位 ASXC
			0x00,0x00,0x00, 0x0D 四位长度，最后一个为总长度
			0x00,0x12,0x01,0x31 1位版号固定   后面三位内容
			0x26  xor异或值
		 */
		console.log(obj);
		var message = sendMessage.create(obj)
		var buffer = sendMessage.encode(message).finish()
		
		const arrayBuffer = new ArrayBuffer(buffer.length + 10)
		
		let dataView = new DataView(arrayBuffer);
		
		dataView.setInt32(0,buffer.length + 10,true);//指定小端，主机字节序设置
		for (let i = 0; i < buffer.length; i++) {
			dataView.setUint8(i + 9, buffer[i]);
		}
		
		let utils = protobuf.util
		const bytes = utils.stringToBytes(fixa) // 前面4位转换为bytes数组
		console.log(bytes, '55-----');
		const type = new Uint8Array(bytes)   // 前面4位
		
		
		for (let i = 0; i<type.length; i++) {
			dataView.setUint8(i , type[i]);
		}
		
		dataView.setUint8(7, buffer.length + 10);
		
		// 转换为可操作的数组 TypedArray
		const typeArray = new Uint8Array(dataView.buffer)
		console.log(type);
		
		let init
		for (let item of typeArray) { // 循环全部的值
			init ^= item  // 获取异或值
		}
		console.log(init);
		// dataView.setUint8(dataView.byteLength - 2, 0x0D);
		dataView.setUint8(dataView.byteLength - 1, init); // 最后一位设置异或值
		console.log(dataView.buffer);
		uni.sendSocketMessage({
			data: dataView.buffer
		})
	}
	// 接收消息
	receiveMessage() {
		return new Promise((resolve, reject) => {
			uni.onSocketMessage(function(res) {
				let typedArray = new Uint8Array(res.data)
				let arr = typedArray.slice(9, typedArray.length - 1)
				console.log(arr);
				const result = resultMessage.decode(arr)
				resolve(result)
			})
		})
	}
	
}