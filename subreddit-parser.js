const https = require('https');

https.get('https://www.reddit.com/r/hardwareswap/new.json?sort=new', (res) => {
    console.log('res: ', res.data);

    // console.log(res.data.children);

    // res.data.children.forEach((post, index) => {
    //     console.log('#' + index);
    //     console.log('Title: ', post.title);
    //     console.log('Body: ', post.selftext);
    // })


});