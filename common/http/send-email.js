require('dotenv').config();
const nodemailer = require('nodemailer');


function sendEmail(newPosts) {
  // beautify email content from newposts
  let str = '';
  for (let key in newPosts) {
    str+= newPosts[key].url;
  }

  const transporter = nodemailer.createTransport({
    service: 'hotmail', 
    auth: {
      user: process.env.HOTMAIL_USER,
      pass: process.env.HOTMAIL_PASS
    },    
    tls: {
      rejectUnauthorized: false
    }
  })

  const mailOptions = {
    from: process.env.HOTMAIL_USER,
    to: process.env.HOTMAIL_USER,
    subject: 'NCase M1 Found!',
    text: str
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error in sending email: ", err);
        reject();
      } else {
        console.log('Email sent');
        resolve();
      }
    });
  })
}

module.exports = {
  sendEmail
};