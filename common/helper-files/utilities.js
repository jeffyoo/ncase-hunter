const db = require('../db');

function findKeyword(posts, keyword) {
	const newObj = {};
	if (!keyword) {
		console.log('No keyword, exiting.')
		return;
	} else {
		posts.forEach(postObj => {
			const p = postObj.data;

			if (p.title.toLowerCase().includes(keyword) || p.selftext.toLowerCase().includes(keyword)) {
				if (!db[p.created]) {
					db[p.created] = { title: p.title, text: p.selftext, url: p.url };
					newObj[p.created] = { title: p.title, text: p.selftext, url: p.url };
				}
			}
		})
	}
	return newObj;
}

module.exports = {
	findKeyword
};