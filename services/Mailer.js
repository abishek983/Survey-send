const sgMail = require('@sendgrid/mail');
const { sendGridKey } = require('../config/keys');

sgMail.setApiKey(sendGridKey);

async function SendMail({title , subject , body} , recipients){
  // console.log(recipients);
    const msg = {
    to: recipients,
    from: 'no-reply@surveys.com',
    subject: subject,
    text: title,
    html: body,
  };
  await sgMail.send(msg , (err,res) => {
    if(err)
      console.log(err);
  });
}

 exports.SendMail = SendMail;