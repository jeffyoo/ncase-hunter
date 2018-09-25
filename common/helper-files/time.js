// change name of repo

function getTime() {
	const d = new Date();
	const month = d.getMonth() + 1;
	const day = d.getDate();
	const year = d.getFullYear();
	const hour = getHour(d.getHours()) 
	const minutes = d.getMinutes();
	const seconds = d.getSeconds();
	const amOrPm = getAmOrPm(d.getHours());

	return 'Running getPosts on ' + month + '/' + day + '/' + year + ' at ' + hour + ':' + minutes + ':' + seconds + amOrPm;
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

const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const tenMinutes = oneMinute * 10;

module.exports = {
	getTime,
	getHour,
	getAmOrPm,
	oneSecond,
	oneMinute,
	tenMinutes
};