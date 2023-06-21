const entities = require('entities');

module.exports.responseHooks = [
  async context => {
  	const res = context.response.getBody().toString('utf-8');

  	const decoded = entities.decodeXML(res) + 'тест';
  	console.log(decoded);

  	context.response.setBody(Buffer.from(decoded, 'utf-8'));
  }
]