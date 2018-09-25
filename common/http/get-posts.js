const https = require('https');

function getPosts(url) {
	return new Promise((resolve, reject) => {
		https.get(url, (res) => {
			let data = '';
	
			res.on('data', (chunk) => {
				data += chunk;
			});
	
			res.on('end', () => {
				const posts = JSON.parse(data).data.children;
				resolve(posts);
			})
		});
	})
};

module.exports = {
	getPosts
}