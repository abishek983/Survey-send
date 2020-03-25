const mongoose = require('mongoose');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplates/surveyTemplates');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys',async (req, res) => {
        if (req.user) {
            // await console.log(template());
            const { title, subject, body , recipients } = req.body;
            // const newBody = await template(body);
            const survey = new Survey({
                title,
                subject,
                body : template(body),
                recipients: recipients.split(',').map(email => ({ email: email.trim() })),
                _user: req.user.id,
                dateSent: Date.now()
            });
            //   subject.save();
            var emailAddress=[];
            function formatEmail(EMAIL) {
                emailAddress =  EMAIL.map(({ email }) => email);
            }
            formatEmail(survey.recipients);
            try{
                await Mailer.SendMail(survey,emailAddress);
                survey.save();
                res.send(user);
            }
            catch(err){
                res.status(422).send(err);
            }
        }
    });
    //place to send the mail
};
