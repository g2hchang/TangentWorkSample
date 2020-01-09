// EmailService.js
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
// Configure transport options
const mailgunOptions = {
  auth: {
    api_key: 'a552594aca457ec5be4ebe10e8ca4fd1-7bbbcb78-5ba85559',
    domain: 'beamplatform.com',
  }
}
const transport = mailgunTransport(mailgunOptions)
// EmailService
class EmailService {
  constructor() {
    this.emailClient = nodemailer.createTransport(transport)
  }
  sendText(to, subject, text, html, attachments) {
    console.log(to);
    return new Promise((resolve, reject) => {
      this.emailClient.sendMail({
        from: '"Beamplatform" <notifications@beamplatform.com>',
        to,
        subject,
        text,
        html,
        attachments,
      }, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  }
  receiveText(from, subject, text){
    return new Promise((resolve, reject) => {
      this.emailClient.sendMail({
        from,
        to: 'changhanbin91@gmail.com',
        subject,
        text
      }, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  }
}
module.exports = new EmailService()

/*var api_key = 'a552594aca457ec5be4ebe10e8ca4fd1-7bbbcb78-5ba85559';
var domain = 'beamplatform.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var nodemailer = require('nodemailer');
var data = {
  from: 'BeamPlatform <notifications@beamplatform.com>',
  to: 'changhanbin91@gmail.com',
  subject: 'Hello',
  html: './email.html',
  text: ''
};
 
mailgun.messages().send(data, function (error, body) {
  console.log(body);
  if(error){
 	console.log(error);
  }
  console.log(body);
});

var transport = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    tls: { ciphers: 'SSLv3' },
    auth: {
      user: 'postmaster@beamplatform.com',
      password: '305ac71bfec8f6ee55737b11a4801b6a-7bbbcb78-4bb6f7f1'
    }
  });

transport.sendMail({
      from: 'postmaster@beamplatform.com',
      to: ['changhanbin91@gmail.com'],
      subject: 'Fancy Email',
      text: 'still send some text to be on the safe side',
      html: { path: './email.html' }
  });*/