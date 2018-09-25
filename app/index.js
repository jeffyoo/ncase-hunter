const { getTime, tenMinutes } = require('../common/helper-files/time');
const { getPosts } = require('../common/http/get-posts');
const { findKeyword } = require('../common/helper-files/utilities');
const { sendEmail } = require('../common/http/send-email');

function main(subreddit, sortBy, keyword) {
	const url = `https://www.reddit.com/r/${subreddit}/new.json?sort=${sortBy}`;
	console.log(getTime());
	return getPosts(url)
	.then(posts => {
		const newPosts = findKeyword(posts, keyword);
		console.log('newPosts: ', newPosts)
		if (Object.keys(newPosts).length > 0) {
			return sendEmail(newPosts)
			.then(res => {
				console.log('Email successful');
				return;
			})
		} else {
			console.log('No keyterms found');
			return;
		}
	}).catch(err => {
		console.log('oops: ', err);
		return;
	})
}

setInterval(() => {
	main('hardwareswap', 'new', 'ncase');
}, tenMinutes);

main('hardwareswap', 'new', 'ncase');