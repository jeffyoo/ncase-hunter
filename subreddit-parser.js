const https = require('https');

const url = 'https://www.reddit.com/r/hardwareswap/new.json?sort=new';

function getPosts(url, keyword) {
	getTime();

	https.get(url, (res) => {
		let data = '';

		res.on('data', (chunk) => {
			data += chunk;
		});

		res.on('end', () => {
			const posts = JSON.parse(data).data.children;
			findKeyword(posts, keyword);
		})
	});
};

function findKeyword(posts, keyword) {
	console.log('length: ', posts.length);

	posts.forEach(postObj => {
		const p = postObj.data;
		if (p.selftext.includes(keyword) || p.title.includes(keyword)) {
			// Check if it's in the 'DB'
				// If it is not, save it then show it
				// If it is, then skip


			console.log(p.title);
			console.log(p.selftext);
		}
	})
}

function getTime() {
	const d = new Date();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	const year = d.getFullYear();
	const hour = getHour(d.getHours()) 
  const minutes = d.getMinutes();
	const seconds = d.getSeconds();
	const amOrPm = getAmOrPm(d.getHours());

	console.log('Running getPosts on ' + month + '/' + day + '/' + year + ' at ' + hour + ':' + minutes + ':' + seconds + amOrPm);
}

function getHour(hour) {
	if (hour > 12) {
		return hour - 12;
	} else {
		return hour;
	}
}

function getAmOrPm(hour) {
	if (hour >= 12) {
		return 'pm';
	} else {
		return 'am';
	}
}

setInterval(() => {
	getPosts(url, '1080');
}, 1000);
// }, 300000)

// getPosts(url);