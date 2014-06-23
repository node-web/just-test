// 判断操作系统
var os = require("os");
// console.log( os.platform() );

// windows == 'win32'  |   osx == "darwin"

if( os.platform() == 'win32' ){

	console.log('windows');

}else if( os.platform() == 'darwin' ){

	console.log('mac');

}