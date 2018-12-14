	const redisConnection = require("./redis-connection");
const request = require('sync-request');


console.log('Worker Running');

const createQueryString = (qObj) => {

	let qString = qObj.query.replace(' ', '+');

	return `https://pixabay.com/api/?key=${qObj.apiKey}&q=${qString}&image_type=photo`
}

redisConnection.on('search-image:request:*', async (message, channel) => {
	// console.log(message.data.searchq);
	let requestUrl = createQueryString({ apiKey: "10848846-72ba2819a1e4cccdfb9a9b1d6", query: message.data.searchq})
	console.log(requestUrl); 

	let data = request('GET', requestUrl);
	let jData = JSON.parse(data.getBody('utf-8'));
	
	console.log(`${message.eventName}:success:${message.requestId}, ${message.data.uname}`);

	redisConnection.emit(`${message.eventName}:success:${message.requestId}`, { uname: message.data.uname, requestId: message.requestId, data: { j: jData, uname: message.data.uname, mg: message.data.message, }, eventName: message.eventName })
});
